package net.likelion.picar.domain;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String brand;              // 제조사
    private String model;              // 모델명
    private int modelYear;            // 연식
    private LocalDate releaseDate;     // 출시일
    private String origin;             // 국산 or 외제
    private String fuelType;           // 연료 종류
    private int engineDisplacement;    // 배기량 (cc)
    private int mileage;               // 주행거리 (km)
    private String size;               // 차량 크기
    private int seatingCapacity;       // 좌석 수

    private int priceMin;              // 가격 하한 (만원)
    private Integer priceMax;          // 가격 상한 (만원, nullable)
    private Integer finalPrice;        // 총 가격 (만원)
    private int maintenanceCostMin;    // 유지비 하한 (만원)
    private Integer maintenanceCostMax; // 유지비 상한 (만원, nullable)

    private String specialNote;        // 특이사항

    @ManyToOne
    @JoinColumn
    private Dealer dealer;

    @ElementCollection
    @CollectionTable(
            name = "car_images",
            joinColumns = @JoinColumn(name = "car_id")
    )
    @Column(name = "image_path")
    private List<String> imagePaths;
}
