package net.likelion.picar.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CarDetailResponseDto {
    private Long id;
    private String brand;
    private String model;
    private String fuelType;
    private String origin;
    private int seatingCapacity;
    private String size;
    private int maintenanceCostMin;
    private Integer maintenanceCostMax;
    private int priceMin;
    private Integer priceMax;

    // 딜러 정보 일부도 추가하고 싶다면 아래와 같이 확장 가능
    private String dealerName;
    private String dealerAffiliation;
    private Long dealerId;
}