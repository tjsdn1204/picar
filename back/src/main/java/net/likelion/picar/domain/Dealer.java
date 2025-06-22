package net.likelion.picar.domain;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Dealer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name; // 이름

    private String affiliation; // 소속사
    private String position; // 직급

    @Builder.Default
    @OneToMany(mappedBy = "dealer", cascade = CascadeType.ALL, orphanRemoval = true) // 딜러 : 차 = 1 : N
    private List<Car> carList = new ArrayList<>();

    private String imagePath;

}
