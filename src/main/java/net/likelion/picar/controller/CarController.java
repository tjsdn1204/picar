package net.likelion.picar.controller;

import lombok.RequiredArgsConstructor;
import net.likelion.picar.dto.CarResponseDto;
import net.likelion.picar.service.CarService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import net.likelion.picar.dto.CarDetailResponseDto;

import java.util.List;

@RestController
@RequestMapping("/api/cars")
@RequiredArgsConstructor
public class CarController {

    private final CarService carService;

    // 모델명으로 차량들 조회
    @GetMapping("/model/{modelName}")
    public ResponseEntity<List<CarResponseDto>> getCarsByModel(@PathVariable String modelName) {
        List<CarResponseDto> cars = carService.getCarsByModel(modelName);
        return ResponseEntity.ok(cars);
    }

    // id로 특정 차 정보 조회
    @GetMapping("/{carId}")
    public ResponseEntity<CarDetailResponseDto> getCarDetail(@PathVariable Long carId) {
        return ResponseEntity.ok(carService.getCarDetailById(carId));
    }
}