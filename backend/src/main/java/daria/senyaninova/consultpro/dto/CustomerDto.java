package daria.senyaninova.consultpro.dto;

import daria.senyaninova.consultpro.model.CustomerData;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerDto {
    private Long id;

    private String name;
    private String phone;
    private String about;

    public static CustomerDto get(CustomerData data){
        return new CustomerDto(
                data.getId(),
                data.getName(),
                data.getPhone(),
                data.getAbout());
    }
}
