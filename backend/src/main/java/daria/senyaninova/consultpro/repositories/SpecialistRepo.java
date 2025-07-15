package daria.senyaninova.consultpro.repositories;


import daria.senyaninova.consultpro.model.SpecialistData;
import daria.senyaninova.consultpro.model.UserData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface SpecialistRepo extends JpaRepository<SpecialistData, Long> {
    Optional<List<SpecialistData>> findAllByUserData_username(String username);
    Optional<SpecialistData> findByUserData(UserData userData);
//    Optional<SpecialistData> findByUserData_Username(String username);

    boolean existsByUserData_Username(String username);

    @Query("SELECT s FROM SpecialistData s WHERE " +
            "(:department IS NULL OR s.department = :department) AND " +
            "(:experience IS NULL OR s.experience = :experience) AND " +
            "(:wage IS NULL OR s.wage <= :wage)")
    List<SpecialistData> findByFilters(
            @Param("department") String department,
            @Param("experience") String experience,
            @Param("wage") String wage
    );

}
