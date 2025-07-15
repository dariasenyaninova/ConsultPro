package daria.senyaninova.consultpro.repositories;


import daria.senyaninova.consultpro.model.UserData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<UserData, Long> {
    Optional<UserData> findByUsername(String username);
}
