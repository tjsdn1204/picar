package net.likelion.picar.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Dealer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String company;

    @OneToMany(mappedBy = "dealer", cascade = CascadeType.ALL) // 딜러 : 차 = 1 : N. 한명의 딜러가 여러대 가질 수 있음. 딜러가 없어지면 그 차 data도 같이 삭제.
    private List<Car> carList = new ArrayList<>(); // 딜러가 가지고 잇는 Car list
}
