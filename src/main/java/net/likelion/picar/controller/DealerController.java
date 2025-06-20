package net.likelion.picar.controller;

import lombok.RequiredArgsConstructor;
import net.likelion.picar.domain.Car;
import net.likelion.picar.dto.DealerResponseDto;
import net.likelion.picar.service.DealerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import net.likelion.picar.dto.CarResponseDto;
import java.util.List;

@RestController
@RequestMapping("/api/dealers")
@RequiredArgsConstructor
public class DealerController {

    private final DealerService dealerService;

    // 딜러 전부 조회
    @GetMapping
    public ResponseEntity<List<DealerResponseDto>> getAllDealers() {
        return ResponseEntity.ok(dealerService.getAllDealers());
    }

    // 딜러 ID로 딜러 조회
    @GetMapping("/{dealerId}")
    public ResponseEntity<DealerResponseDto> getDealerById(@PathVariable Long dealerId) {
        DealerResponseDto dealer = dealerService.getDealerById(dealerId);
        return ResponseEntity.ok(dealer);
    }

    // 딜러 id로 해당 딜러가 가진 차량 전부 조회
    @GetMapping("/{dealerId}/cars")
    public ResponseEntity<List<CarResponseDto>> getCarsByDealerId(@PathVariable Long dealerId) {
        List<CarResponseDto> cars = dealerService.getCarsByDealerId(dealerId);
        return ResponseEntity.ok(cars);
    }
}
