package daria.senyaninova.consultpro.repositories;


import daria.senyaninova.consultpro.model.SpecialistData;
import daria.senyaninova.consultpro.model.SpecialistRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RequestRepo extends JpaRepository<SpecialistRequest, Long> {
    List<SpecialistRequest> findAllByApplicant_UserData_Username(String username);
    List<SpecialistRequest> findAllBySpecialistData_UserData_Username(String username);

}
