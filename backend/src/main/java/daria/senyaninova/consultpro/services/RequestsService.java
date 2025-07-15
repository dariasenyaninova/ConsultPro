package daria.senyaninova.consultpro.services;

import daria.senyaninova.consultpro.dto.SpecialistRequestData;
import daria.senyaninova.consultpro.dto.SpecialistRequestDto;
import daria.senyaninova.consultpro.dto.UpdateRequest;
import daria.senyaninova.consultpro.exceptions.PermissionDeniedError;
import daria.senyaninova.consultpro.model.*;
import daria.senyaninova.consultpro.repositories.CustomerRepo;
import daria.senyaninova.consultpro.repositories.RequestRepo;
import daria.senyaninova.consultpro.repositories.SpecialistRepo;
import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static daria.senyaninova.consultpro.model.RequestStatus.*;

@Service
@AllArgsConstructor
public class RequestsService {
    private RequestRepo requestRepo;
    private SpecialistRepo specialistRepo;
    private CustomerRepo customerRepo;


    public boolean updateClientRequest(Long id, UpdateRequest updated) {
        if (!updated.getNewStatus().equals(CANCELED)) {
            throw new PermissionDeniedError("Client has no authorities to change status to " + updated.getNewStatus());
        }

        Optional<SpecialistRequest> requestOptional = requestRepo.findById(id);
        if (requestOptional.isEmpty()) {
            return false;
        }

        SpecialistRequest request = requestOptional.get();
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (!request.getApplicant().getUserData().getUsername().equals(userDetails.getUsername())) {
            throw new PermissionDeniedError("Client tried to edit someone else's request");
        }

        List<RequestStatus> forbiddenStatuses = List.of(ACCEPTED, CLOSED, DECLINED);
        if (forbiddenStatuses.contains(request.getStatus())) {
            throw new PermissionDeniedError("Client tried to change request's status " + request.getStatus()
                    + " to forbidden one: " + updated.getNewStatus());
        }

        request.setStatus(updated.getNewStatus());
        requestRepo.save(request);
        return true;
    }

    public boolean updateSpecialistRequest(Long id, UpdateRequest updated) {
        Optional<SpecialistRequest> requestOptional = requestRepo.findById(id);
        if (requestOptional.isEmpty()) {
            return false;
        }

        SpecialistRequest request = requestOptional.get();
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (!request.getSpecialistData().getUserData().getUsername().equals(userDetails.getUsername())) {
            throw new PermissionDeniedError("Specialist tried to edit someone else's request");
        }

        List<RequestStatus> forbiddenStatuses = List.of(DECLINED, CANCELED, CLOSED);
        if (forbiddenStatuses.contains(request.getStatus())) {
            throw new PermissionDeniedError("Specialist tried to change request's status " + request.getStatus()
                    + " to forbidden one: " + updated.getNewStatus());
        }

        request.setStatus(updated.getNewStatus());
        requestRepo.save(request);
        return true;
    }

    public boolean makeRequest(SpecialistRequestDto requestDto) {
        Optional<SpecialistData> specialistOptional = specialistRepo.findById(requestDto.getSpecialistId());
        if (specialistOptional.isEmpty()) return false;
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (userDetails.getUsername().equals(specialistOptional.get().getUserData().getUsername())) return false;

        Optional<CustomerData> customerDataOptional = customerRepo.findByUserData_username(userDetails.getUsername());
        if (customerDataOptional.isEmpty()) return false;

        SpecialistRequest specialistRequest = new SpecialistRequest(
                null,
                specialistOptional.get(),
                customerDataOptional.get(),
                null,
                requestDto.getMessage(),
                RequestStatus.OPEN
        );
        requestRepo.save(specialistRequest);
        return true;
    }

    public List<SpecialistRequestData> findAllReceivedRequests() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        boolean specialistProfileExists = specialistRepo.existsByUserData_Username(userDetails.getUsername());
        if (!specialistProfileExists) {
            return Collections.emptyList();
        }

        List<SpecialistRequest> allBySpecialistData
                = requestRepo.findAllBySpecialistData_UserData_Username(userDetails.getUsername());

        return allBySpecialistData.stream().map(SpecialistRequestData::get).toList();
    }

    public List<SpecialistRequestData> findAllOutcomeRequests() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return requestRepo.findAllByApplicant_UserData_Username(userDetails.getUsername())
                .stream()
                .map(SpecialistRequestData::get)
                .peek(this::hidePhoneIfNotAccepted)
                .toList();
    }

    private void hidePhoneIfNotAccepted(SpecialistRequestData request) {
        if (!request.getStatus().equals(ACCEPTED)) {
            request.getSpecialist().setPhone("HIDE");
        }
    }
}
