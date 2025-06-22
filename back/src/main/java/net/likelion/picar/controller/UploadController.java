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
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UploadController {

    private final CarRepository carRepository;
    private final DealerRepository dealerRepository;
    // 프로젝트 루트 경로 기준으로 상대경로 설정 (운영체제에 따라 자동 적용)
    private final String carDir = Paths.get(System.getProperty("user.dir"), "images", "Uploads_Cars").toString() + File.separator;
    private final String dealerDir = Paths.get(System.getProperty("user.dir"), "images", "Uploads_Dealers").toString() + File.separator;

    /**
     * 이미지 파일과 JSON 형식 메타데이터를 함께 업로드하는 API
     *
     * [POST] /api/upload
     * - 요청 형식: multipart/form-data
     * - 파라미터:
     *     - files: MultipartFile[] — 차량 또는 딜러 이미지 파일들
     *     - metadata: String — JSON 배열 형태 메타데이터
     *        [
     *          { "fileName": "car_1_1.jpg", "targetType": "car", "targetId": 1 },
     *          ...
     *        ]
     *
     * 기능:
     * - 각 파일의 이름과 메타데이터를 비교하여 차량/딜러에 연결
     * - 해당 경로에 이미지 저장 후 DB의 imagePath/imagePaths에 반영
     */
    @PostMapping("/upload")
    public ResponseEntity<String> upload(
            @RequestParam("files") List<MultipartFile> files,
            @RequestParam("metadata") String metadataJson) {

        try {
            // JSON 문자열을 UploadMetaDto 리스트로 변환
            ObjectMapper mapper = new ObjectMapper();
            List<UploadMetaDto> metaList = mapper.readValue(metadataJson, new TypeReference<>() {});

            int uploadCount = 0;

            // 업로드된 모든 파일 순회
            for (MultipartFile file : files) {
                String originalName = file.getOriginalFilename();

                // 메타데이터에서 해당 파일 정보 검색
                UploadMetaDto meta = metaList.stream()
                        .filter(m -> m.getFileName().equals(originalName))
                        .findFirst()
                        .orElseThrow(() -> new RuntimeException("해당 파일 이름에 대한 메타데이터가 없습니다: " + originalName));

                String saveDir; // 저장할 디렉토리 경로
                String filename; // 저장할 파일 이름
                String imageUrl; // DB에 저장될 상대 경로

                // 차량 이미지 처리
                if ("car".equals(meta.getTargetType())) {
                    Car car = carRepository.findById(meta.getTargetId())
                            .orElseThrow(() -> new RuntimeException("차량 ID 오류: " + meta.getTargetId()));

                    filename = "car_" + car.getId() + "_" + originalName;
                    saveDir = carDir;
                    imageUrl = "/images/Uploads_Cars/" + filename;

                    saveFile(file, saveDir, filename); // 실제 파일 저장

                    // 이미지 리스트가 null인 경우 초기화
                    if (car.getImagePaths() == null) {
                        car.setImagePaths(new ArrayList<>());
                    }
                    // 이미지 경로 추가 후 저장
                    car.getImagePaths().add(imageUrl);
                    carRepository.save(car);
                    uploadCount++;

                // 딜러 이미지 처리
                } else if ("dealer".equals(meta.getTargetType())) {
                    Dealer dealer = dealerRepository.findById(meta.getTargetId())
                            .orElseThrow(() -> new RuntimeException("딜러 ID 오류: " + meta.getTargetId()));

                    filename = "dealer_" + dealer.getId() + "_" + originalName;
                    saveDir = dealerDir;
                    imageUrl = "/images/Uploads_Dealers/" + filename;

                    saveFile(file, saveDir, filename); // 실제 파일 저장

                    // 딜러에 이미지 경로 저장
                    dealer.setImagePath(imageUrl);
                    dealerRepository.save(dealer);
                    uploadCount++;
                }
            }

            return ResponseEntity.ok("총 " + uploadCount + "개의 이미지가 업로드되고 DB에 반영되었습니다.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("오류 발생: " + e.getMessage());
        }
    }

    // 실제 파일을 디스크에 저장하는 메서드
    private void saveFile(MultipartFile file, String saveDir, String filename) throws IOException {
        File dir = new File(saveDir);
        if (!dir.exists()) {
            boolean created = dir.mkdirs();
            if (!created) {
                throw new IOException("디렉토리 생성 실패: " + saveDir);
            }
        }

        // 실제 저장 경로 생성 후 저장
        File saveFile = new File(saveDir + filename);
        file.transferTo(saveFile);
    }
}
