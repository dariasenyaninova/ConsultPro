package daria.senyaninova.consultpro.dto;

import daria.senyaninova.consultpro.model.CustomerData;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NewCustomerDtoRequest {

    private String name;
    private String phone;
    private String about;

    public static NewCustomerDtoRequest get(CustomerData data){
        return new NewCustomerDtoRequest(
                data.getName(),
                data.getPhone(),
                data.getAbout());
    }
}
