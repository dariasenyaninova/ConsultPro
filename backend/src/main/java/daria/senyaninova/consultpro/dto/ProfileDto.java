package daria.senyaninova.consultpro.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProfileDto {
    private Long userId;
    private CustomerDto customerDto;
    private List<SpecialistDto> specialties;
}
