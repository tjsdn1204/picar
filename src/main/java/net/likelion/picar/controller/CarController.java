package net.likelion.picar.controller;

import lombok.RequiredArgsConstructor;
import net.likelion.picar.domain.Car;
import net.likelion.picar.repository.CarRepository;
import org.springframework.web.bind.annotation.*;
import net.likelion.picar.dto.CarResponseDto;
import net.likelion.picar.service.CarService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import net.likelion.picar.dto.CarDetailResponseDto;

import java.util.List;

    /**
     * [GET] /cars
     *
     * 전체 차량 정보 목록을 조회하는 API
     *
     * - 요청 URL: http://localhost:8080/cars
     * - 요청 방식: GET
     * - 요청 파라미터: 없음
     *
     * - 응답 예시:
     *   [
     *     {
     *       "id": 1,
     *       "brand": "Hyundai",
     *       "model": "AVANTE_AD",
     *       "modelYear": 2019,
     *       "releaseDate": "2019-05-13",
     *       "origin": "국산차",
     *       "fuelType": "휘발유",
     *       "engineDisplacement": 1997,
     *       "mileage": 30000,
     *       "size": "준중형",
     *       "seatingCapacity": 5,
     *       "priceMin": 0,
     *       "priceMax": 1000,
     *       "maintenanceCostMin": 50,
     *       "maintenanceCostMax": 80,
     *       "specialNote": "판금 / 1인 신조 차량",
     *       "imageUrl": "/images/Uploads_Cars/car_1_avante.jpg",
     *       "dealer": {
     *         "id": 1,
     *         "name": "최지원",
     *         "affiliation": "멋사중고차",
     *         "imageUrl": "/images/Uploads_Dealers/dealer_1_choi.jpg"
     *       }
     *     },
     *     ...
     *   ]
     *
     * - 설명:
     *   DB에 저장된 모든 차량 정보를 조회합니다.
     *   차량에는 이미지 URL과 연결된 딜러 정보까지 포함됩니다.
     *   프론트엔드는 이 API를 통해 차량 목록 페이지나 추천 결과를 구성할 수 있습니다.
     */
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
