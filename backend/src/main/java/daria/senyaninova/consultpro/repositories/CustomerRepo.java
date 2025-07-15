package daria.senyaninova.consultpro.repositories;


import daria.senyaninova.consultpro.model.CustomerData;
import daria.senyaninova.consultpro.model.SpecialistData;
import daria.senyaninova.consultpro.model.UserData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CustomerRepo extends JpaRepository<CustomerData, Long> {
    Optional<CustomerData> findByUserData_username(String username);
    Optional<CustomerData> findByUserData(UserData userData);
}
