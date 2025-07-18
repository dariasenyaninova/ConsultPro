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
        return ResponseEntity.ok(specialistService.search(criteria));
    }


}
