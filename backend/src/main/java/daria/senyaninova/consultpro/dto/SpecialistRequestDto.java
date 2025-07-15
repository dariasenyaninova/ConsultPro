package daria.senyaninova.consultpro.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SpecialistRequestDto {
    private Long specialistId;
    private String message;

}
