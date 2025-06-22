package net.likelion.picar.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class CarResponseDto {
    private Long id;
    private String brand;
    private String model;
    private int modelYear;
    private String releaseDate;
    private String origin;
    private String fuelType;
    private int engineDisplacement;
    private int mileage;
    private String size;
    private int seatingCapacity;
    private int priceMin;
    private Integer priceMax;
    private int maintenanceCostMin;
    private Integer maintenanceCostMax;
    private String specialNote;
    private String dealerName;
    private Long dealerId;
    private String position;
    private List<String> imagePaths; // 차량 이미지
    private String dealerImagePath; // 딜러 이미지
}
