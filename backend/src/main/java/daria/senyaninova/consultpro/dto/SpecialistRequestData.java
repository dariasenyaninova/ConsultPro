package daria.senyaninova.consultpro.dto;

import daria.senyaninova.consultpro.model.CustomerData;
import daria.senyaninova.consultpro.model.RequestStatus;
import daria.senyaninova.consultpro.model.SpecialistData;
import daria.senyaninova.consultpro.model.SpecialistRequest;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SpecialistRequestData {
    private Long id;
    private SpecialistDto specialist;
    private CustomerDto applicant;
    private LocalDateTime createdAt;
    private String message;
    private RequestStatus status;

    public static SpecialistRequestData get(SpecialistRequest request){
        return new SpecialistRequestData(
                request.getId(),
                SpecialistDto.get(request.getSpecialistData()),
                CustomerDto.get(request.getApplicant()),
                request.getCreatedAt(),
                request.getMessage(),
                request.getStatus());
    }

}
