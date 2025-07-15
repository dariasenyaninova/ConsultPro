package daria.senyaninova.consultpro.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SpecialistData {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String department;
    private String phone;
    private String experience;
    private String about;
    private String wage;

    @ManyToOne
    private UserData userData;
}
