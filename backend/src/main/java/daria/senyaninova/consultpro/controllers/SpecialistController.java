package daria.senyaninova.consultpro.controllers;

import daria.senyaninova.consultpro.dto.SpecialistRequestData;
import daria.senyaninova.consultpro.dto.UpdateRequest;
import daria.senyaninova.consultpro.services.RequestsService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("specialist")
public class SpecialistController {
    private RequestsService requestsService;
    @GetMapping("requests")
    public List<SpecialistRequestData> getMyReceivedRequest(){
        return requestsService.findAllReceivedRequests();
    }

    @PostMapping("request/{id}")
    public boolean updateRequest(@PathVariable Long id, @RequestBody UpdateRequest updated){
        return requestsService.updateSpecialistRequest(id, updated);
    }

}
