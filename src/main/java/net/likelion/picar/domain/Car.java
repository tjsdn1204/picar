package net.likelion.picar.domain;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 이 필드 값을 DB가 자동으로 생성. id가 1,2,3,4.. 이렇게 자동으로 생성
    private Long id; // primary key

    private String brand;          // 제조사
    private String model;          // 모델명
    private String fuelType;       // 연료 종류
    private String origin;         // 국산 or 수입
    private int seatingCapacity;      // 좌석 수
    private String size;           // 크기

    private int maintenanceCostMin;   // 유지비 하한
    private Integer maintenanceCostMax; // 유지비 상한 (null 허용)

    private int priceMin;             // 가격 하한 (만원 단위)
    private Integer priceMax;             // 가격 상한 (null 허용)

    @ManyToOne
    @JoinColumn
    private Dealer dealer;
}
