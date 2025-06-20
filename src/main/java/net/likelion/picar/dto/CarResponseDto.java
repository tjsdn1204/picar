package net.likelion.picar.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CarResponseDto {
    private String brand;
    private String model;
    private String fuelType;
    private String origin;
    private int priceMin;
    private int priceMax;
    private String dealerName;
}
