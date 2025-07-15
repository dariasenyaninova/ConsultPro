package daria.senyaninova.consultpro.dto;

import daria.senyaninova.consultpro.model.RequestStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateRequest {
    private RequestStatus newStatus;
}
