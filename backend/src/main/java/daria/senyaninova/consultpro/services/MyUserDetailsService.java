package daria.senyaninova.consultpro.services;

import daria.senyaninova.consultpro.dto.UserDetailsAdapter;
import daria.senyaninova.consultpro.model.UserData;
import daria.senyaninova.consultpro.repositories.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class MyUserDetailsService implements UserDetailsService {
    private UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserData userData = userRepo.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));
        return new UserDetailsAdapter(userData);
    }
}
