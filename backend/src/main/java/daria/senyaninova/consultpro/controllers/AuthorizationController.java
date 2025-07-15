package daria.senyaninova.consultpro.controllers;

import daria.senyaninova.consultpro.dto.RegistrationRequest;
import daria.senyaninova.consultpro.services.AuthorizationService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class AuthorizationController {
    private AuthorizationService authorizationService;

    @PostMapping("/registration")
    public ResponseEntity<String> registration(@RequestBody RegistrationRequest request){
        return ResponseEntity.ok(authorizationService.registration(request));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(){
        return ResponseEntity.ok().build();
    }
}
