package daria.senyaninova.consultpro.services;

import daria.senyaninova.consultpro.dto.*;
import daria.senyaninova.consultpro.model.CustomerData;
import daria.senyaninova.consultpro.model.SpecialistData;
import daria.senyaninova.consultpro.model.UserData;
import daria.senyaninova.consultpro.repositories.CustomerRepo;
import daria.senyaninova.consultpro.repositories.SpecialistRepo;
import daria.senyaninova.consultpro.repositories.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.security.core.AuthenticatedPrincipal;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserProfileService {
    private UserRepo userRepo;
    private CustomerRepo customerRepo;
    private SpecialistRepo specialistRepo;


    public boolean updateCustomerProfile(NewCustomerDtoRequest request){
        UserDetails details = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = details.getUsername();
        Optional<UserData> byUsername = userRepo.findByUsername(username);
        if (byUsername.isEmpty()) {
            return false;
        }
        Optional<CustomerData> byUserDataUsername = customerRepo.findByUserData_username(username);
        Long profileId = null;
        if (byUserDataUsername.isPresent()) {
            profileId = byUserDataUsername.get().getId();
        }

        UserData userData = byUsername.get();
        CustomerData customerData = new CustomerData(profileId, request.getName(), request.getPhone(),
                request.getAbout(), userData);
        customerRepo.save(customerData);

        return true;
    }

    public boolean createSpecialistProfile(NewSpecialistDtoRequest request){
        UserDetails details = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = details.getUsername();
        Optional<UserData> byUsername = userRepo.findByUsername(username);
        if (byUsername.isEmpty()) {
            return false;
        }

        UserData userData = byUsername.get();
        SpecialistData specialistData = new SpecialistData(null, request.getName(), request.getDepartment(),
                request.getPhone(), request.getExperience(), request.getAbout(), request.getWage(), userData);
        specialistRepo.save(specialistData);
        grantSpecialistRole(userData);
        return true;
    }

    private void grantSpecialistRole(UserData userData){
        if (userData.getRole().contains("ROLE_SPECIALIST")) {
            return;
        }

        userData.setRole(userData.getRole() + ", ROLE_SPECIALIST");
        userRepo.save(userData);
    }

    public boolean updateSpecialistProfile(SpecialistDto request){
        if (request.getId() == null) {
            return false;
        }
        UserDetails details = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = details.getUsername();
        Optional<UserData> byUsername = userRepo.findByUsername(username);
        if (byUsername.isEmpty()) {
            return false;
        }
        Optional<SpecialistData> optionalData = specialistRepo.findById(request.getId());
        if (optionalData.isEmpty()) {
            return false;
        }
        SpecialistData specialistDataOld = optionalData.get();
        if (!specialistDataOld.getUserData().getUsername().equals(username)) {
            return false;
        }


        UserData userData = byUsername.get();
        SpecialistData specialistData = new SpecialistData(request.getId(), request.getName(), request.getDepartment(),
                request.getPhone(), request.getExperience(), request.getWage(), request.getAbout(), userData);
        specialistRepo.save(specialistData);
        return true;
    }

    public ProfileDto getProfile(){
        UserDetails details = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = details.getUsername();
        Optional<List<SpecialistData>> allSpecialitiesOptional = specialistRepo.findAllByUserData_username(username);
        List<SpecialistDto> allSpecialities = allSpecialitiesOptional.orElse(Collections.emptyList())
                .stream().map(SpecialistDto::get).toList();
        CustomerData dataUsername = customerRepo.findByUserData_username(username).orElse(null);
        CustomerDto customerDto = null;
        if(dataUsername != null){
            customerDto = CustomerDto.get(dataUsername);
        }
        Long userId = userRepo.findByUsername(username).get().getId();

        return new ProfileDto(userId, customerDto, allSpecialities);
    }
}
