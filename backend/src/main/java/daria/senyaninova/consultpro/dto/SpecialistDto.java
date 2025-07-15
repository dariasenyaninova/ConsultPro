package daria.senyaninova.consultpro.dto;

import daria.senyaninova.consultpro.model.SpecialistData;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SpecialistDto {
    private Long   id;

    private String name;
    private String department;
    private String phone;
    private String experience;
    private String about;
    private String wage;

    public static SpecialistDto get(SpecialistData data){
        return new SpecialistDto(
                data.getId(),
                data.getName(),
                data.getDepartment(),
                data.getPhone(),
                data.getExperience(),
                data.getAbout(),
                data.getWage()
        );
    }
}
