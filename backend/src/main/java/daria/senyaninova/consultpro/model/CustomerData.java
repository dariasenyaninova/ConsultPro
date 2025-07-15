package daria.senyaninova.consultpro.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@RequiredArgsConstructor
public class CustomerData {

    @Id
    @GeneratedValue
    Long id;

    private String name;
    private String phone;
    private String about;

    @OneToOne
    @NonNull
    private UserData userData;


}
