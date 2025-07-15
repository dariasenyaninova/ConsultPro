package daria.senyaninova.consultpro.services;

import daria.senyaninova.consultpro.dto.SpecialistDto;
import daria.senyaninova.consultpro.dto.SpecialistSearchDto;
import daria.senyaninova.consultpro.model.SpecialistData;
import daria.senyaninova.consultpro.repositories.SpecialistRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class SpecialistService {
    private SpecialistRepo specialistRepo;

    public List<SpecialistDto> getAll(){
        return specialistRepo.findAll().stream()
                .map(SpecialistDto::get)
                .peek(e -> e.setPhone("HIDE")).toList();
    }

    public List<SpecialistDto> search(SpecialistSearchDto criteria) {
        List<SpecialistData> result = specialistRepo.findByFilters(
                criteria.getDepartment(),
                criteria.getExperience(),
                criteria.getWage()
        );
        return result.stream().map(SpecialistDto::get).toList();
    }


}
