package daria.senyaninova.consultpro.dto;

import daria.senyaninova.consultpro.model.UserData;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Arrays;
import java.util.Collection;

public class UserDetailsAdapter implements UserDetails {
    private UserData userData;
    private Collection<? extends GrantedAuthority> authorities;

    public UserDetailsAdapter(UserData userData) {
        this.userData = userData;
        authorities = Arrays.stream(userData.getRole().split(", ")).map(SimpleGrantedAuthority::new).toList();
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return userData.getPassword();
    }

    @Override
    public String getUsername() {
        return userData.getUsername();
    }
}
