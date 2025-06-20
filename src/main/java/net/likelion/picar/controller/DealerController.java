package net.likelion.picar.controller;

import lombok.RequiredArgsConstructor;
import net.likelion.picar.domain.Dealer;
import net.likelion.picar.repository.DealerRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/dealers")
public class DealerController {

    private final DealerRepository dealerRepository;

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
    @GetMapping
    public List<Dealer> getAllDealers() {
        return dealerRepository.findAll();
    }
}
