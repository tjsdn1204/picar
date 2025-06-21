package net.likelion.picar.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

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
    private int modelYear;
    private String releaseDate;
    private int mileage;
    private int engineDisplacement;
    // 딜러 정보 일부도 추가하고 싶다면 아래와 같이 확장 가능
    private String dealerName;
    private String dealerAffiliation;
    private Long dealerId;
    private String position;
    private List<String> imagePaths;
    private String dealerImagePath;
}