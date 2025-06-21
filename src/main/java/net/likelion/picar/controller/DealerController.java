package net.likelion.picar.controller;

import lombok.RequiredArgsConstructor;
import net.likelion.picar.domain.Dealer;
import net.likelion.picar.repository.DealerRepository;
import org.springframework.web.bind.annotation.*;
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


    /**
     * [GET] /dealers
     *
     * 전체 딜러 정보 목록을 조회하는 API
     *
     * - 요청 URL: http://localhost:8080/dealers
     * - 요청 방식: GET
     * - 요청 파라미터: 없음
     * - 응답:
     *   [
     *     {
     *       "id": 1,
     *       "name": "최지원",
     *       "affiliation": "멋사중고차",
     *       "imageUrl": "/images/Uploads_Dealers/dealer_1_choi.jpg"
     *     },
     *     ...
     *   ]
     *
     * - 설명:
     *   데이터베이스에 저장된 모든 딜러 정보를 조회합니다.
     *   각 딜러에는 id, 이름(name), 소속(affiliation), 이미지 URL(imageUrl)이 포함됩니다.
     */
