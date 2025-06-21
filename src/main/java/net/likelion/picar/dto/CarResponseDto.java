package net.likelion.picar.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CarResponseDto {
    private Long Id;
    private String brand;
    private String model;
    private String fuelType;
    private String origin;
    private int priceMin;
    private int priceMax;
    private String dealerName;
}
