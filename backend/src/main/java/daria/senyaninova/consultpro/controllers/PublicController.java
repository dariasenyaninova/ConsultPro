package daria.senyaninova.consultpro.controllers;

import daria.senyaninova.consultpro.dto.SpecialistDto;
import daria.senyaninova.consultpro.dto.SpecialistSearchDto;
import daria.senyaninova.consultpro.services.SpecialistService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class PublicController {
    private SpecialistService specialistService;

    @GetMapping("/specialists")
    public ResponseEntity<List<SpecialistDto>> getAll(){
        return ResponseEntity.ok(specialistService.getAll());
    }

    @PostMapping("/specialists/search")
    public ResponseEntity<List<SpecialistDto>> search(@RequestBody SpecialistSearchDto criteria) {
        System.out.println(criteria);
//        if (criteria.isTestRequest()) {
//            return ResponseEntity.ok(List.of(
//                    new SpecialistDto(1L, "[Тестовый] Иван Иванов", "IT", "+7-900-111-22-33", "3 года", "Java, Spring Boot", "1500"),
////                    new SpecialistDto(2L, "[Тестовый] Мария Смирнова", "Маркетинг", "+7-900-222-33-44", "2 года", "SEO, контент", "1200"),
////                    new SpecialistDto(3L, "[Тестовый] Алексей Кузнецов", "Продажи", "+7-900-333-44-55", "5 лет", "B2B продажи", "1800"),
//                    new SpecialistDto(4L, "[Тестовый] Ольга Петрова", "HR", "+7-900-444-55-66", "4 года", "Подбор, рекрутинг", "1400")
//            ));
//        }

        return ResponseEntity.ok(specialistService.search(criteria));
    }


}
