package daria.senyaninova.consultpro.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class SpecialistRequest {
    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne
    private SpecialistData specialistData;
    @ManyToOne
    private CustomerData applicant;
    @CreationTimestamp
    private LocalDateTime createdAt;
    private String message;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private RequestStatus status;



}
