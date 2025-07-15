package daria.senyaninova.consultpro.controllers;

import daria.senyaninova.consultpro.dto.SpecialistRequestData;
import daria.senyaninova.consultpro.dto.SpecialistRequestDto;
import daria.senyaninova.consultpro.dto.UpdateRequest;
import daria.senyaninova.consultpro.services.RequestsService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("client")
public class ClientController {
    private RequestsService requestsService;
    @GetMapping("requests")
    public List<SpecialistRequestData> getMyOutcomeRequest(){
        return requestsService.findAllOutcomeRequests();
    }

    @PostMapping("new-request")
    public boolean makeRequest(@RequestBody SpecialistRequestDto requestDto){
        return requestsService.makeRequest(requestDto);
    }

    @PostMapping("request/{id}")
    public boolean updateRequest(@PathVariable Long id, @RequestBody UpdateRequest updated){
        return requestsService.updateClientRequest(id, updated);
    }
}
