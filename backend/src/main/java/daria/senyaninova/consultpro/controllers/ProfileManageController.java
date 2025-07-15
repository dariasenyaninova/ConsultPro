package daria.senyaninova.consultpro.controllers;

import daria.senyaninova.consultpro.dto.NewCustomerDtoRequest;
import daria.senyaninova.consultpro.dto.NewSpecialistDtoRequest;
import daria.senyaninova.consultpro.dto.ProfileDto;
import daria.senyaninova.consultpro.dto.SpecialistDto;
import daria.senyaninova.consultpro.services.UserProfileService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/profile")
public class ProfileManageController {

    private UserProfileService profileService;

    @PostMapping("/register-specialist")
    public ResponseEntity<?> createSpecialistProfile(@RequestBody NewSpecialistDtoRequest request){
        boolean updated = profileService.createSpecialistProfile(request);
        if(updated)
            return ResponseEntity.ok("success");
        return ResponseEntity.badRequest().build();
    }
    @PostMapping("/customer")
    public ResponseEntity<?> updateCustomerProfile(@RequestBody NewCustomerDtoRequest request){
        boolean updated = profileService.updateCustomerProfile(request);
        if(updated)
            return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }
    @PutMapping("/specialist")
    public ResponseEntity<?> updateSpecialistProfile(@RequestBody SpecialistDto request){
        boolean updated = profileService.updateSpecialistProfile(request);
        if(updated)
            return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/me")
    public ResponseEntity<ProfileDto> getProfile(){
        return ResponseEntity.ok(profileService.getProfile());
    }

    @GetMapping("/check")
    public String test(){
        return "ok!";
    }
}
