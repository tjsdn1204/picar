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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String model;             // 차량 모델명 (예: AVANTE_AD)
    private String origin;            // 국산/수입 (Domestic/Imported)
    private String fuelType;          // 연료 종류 (Gasoline, Diesel 등)
    private String size;              // 크기 (Mini, Large 등)

    @Column(name = "seating_capacity")
    private int seatingCapacity;      // 좌석 수

    private int priceMin;             // 가격 하한 (만원 단위)
    private Integer priceMax;             // 가격 상한

    private int maintenanceCostMin;   // 유지비 하한
    private Integer maintenanceCostMax; // 유지비 상한 (null 허용)
}
