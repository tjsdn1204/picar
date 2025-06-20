package net.likelion.picar.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import net.likelion.picar.domain.Car;
import net.likelion.picar.domain.Dealer;
import net.likelion.picar.dto.UploadMetaDto;
import net.likelion.picar.repository.CarRepository;
import net.likelion.picar.repository.DealerRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UploadController {

    private final CarRepository carRepository;
    private final DealerRepository dealerRepository;

    /**
     * 이미지 파일과 JSON 형식 메타데이터를 함께 업로드하는 API
     *
     * [POST] /api/upload
     * - 요청 형식: multipart/form-data
     *   - files: MultipartFile[] — 차량 또는 딜러 이미지 파일 목록
     *   - metadata: String — JSON 배열 형태의 메타데이터 (UploadMetaDto[])
     *     예시:
     *     [
     *       { "fileName": "avante.jpg", "carId": 1 },
     *       { "fileName": "dealer1.jpg", "dealerId": 2 }
     *     ]
     *
     * - 처리 흐름:
     *   1. metadata JSON을 Java 객체(List<UploadMetaDto>)로 역직렬화
     *   2. 각 파일의 이름을 기준으로 해당 메타데이터 찾기
     *   3. 차량(carId) 또는 딜러(dealerId)에 따라 이미지 저장 경로 결정 및 저장
     *   4. DB에 이미지 경로 반영 (car.setImageUrl / dealer.setImageUrl)
     *
     * - 응답:
     *   - 성공: 업로드된 이미지 수를 포함한 메시지 반환
     *   - 실패: 500 오류와 메시지 반환
     */
    @PostMapping("/upload")
    public ResponseEntity<String> upload(
            @RequestParam("files") List<MultipartFile> files,
            @RequestParam("metadata") String metadataJson) {

        try {
            ObjectMapper mapper = new ObjectMapper();
            List<UploadMetaDto> metaList = mapper.readValue(metadataJson, new TypeReference<>() {});

            int uploadCount = 0;

            for (MultipartFile file : files) {
                String originalName = file.getOriginalFilename();

                // 파일 이름으로 메타데이터 찾기
                UploadMetaDto meta = metaList.stream()
                        .filter(m -> m.getFileName().equals(originalName))
                        .findFirst()
                        .orElseThrow(() -> new RuntimeException("해당 파일 이름에 대한 메타데이터가 없습니다: " + originalName));

                String saveDir;
                String filename;
                String imageUrl;

                if (meta.getCarId() != null) {
                    Car car = carRepository.findById(meta.getCarId())
                            .orElseThrow(() -> new RuntimeException("차량 ID 오류"));
                    saveDir = "C:/ProgramData/MySQL/MySQL Server 8.0/Uploads_Cars/";
                    filename = "car_" + car.getId() + "_" + originalName;
                    imageUrl = "/images/Uploads_Cars/" + filename;

                    // 저장
                    saveFile(file, saveDir, filename);

                    // DB 반영
                    car.setImageUrl(imageUrl);
                    carRepository.save(car);

                } else if (meta.getDealerId() != null) {
                    Dealer dealer = dealerRepository.findById(meta.getDealerId())
                            .orElseThrow(() -> new RuntimeException("딜러 ID 오류"));
                    saveDir = "C:/ProgramData/MySQL/MySQL Server 8.0/Uploads_Dealers/";
                    filename = "dealer_" + dealer.getId() + "_" + originalName;
                    imageUrl = "/images/Uploads_Dealers/" + filename;

                    // 저장
                    saveFile(file, saveDir, filename);

                    // DB 반영
                    dealer.setImageUrl(imageUrl);
                    dealerRepository.save(dealer);
                } else {
                    continue; // 해당 ID가 없으면 무시
                }

                uploadCount++;
            }

            return ResponseEntity.ok("총 " + uploadCount + "개의 이미지가 업로드되고 DB에 반영되었습니다.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("오류: " + e.getMessage());
        }
    }

    private void saveFile(MultipartFile file, String saveDir, String filename) throws Exception {
        File dir = new File(saveDir);
        if (!dir.exists()) {
            boolean created = dir.mkdirs();
            if (!created) {
                throw new IOException("디렉토리 생성 실패: " + saveDir);
            }
        }

        File saveFile = new File(saveDir + filename);
        file.transferTo(saveFile);
    }
}
