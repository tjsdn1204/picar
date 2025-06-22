package net.likelion.picar.service;

import lombok.RequiredArgsConstructor;
import net.likelion.picar.domain.Car;
import net.likelion.picar.domain.Dealer;
import net.likelion.picar.dto.DealerResponseDto;
import net.likelion.picar.repository.DealerRepository;
import org.springframework.stereotype.Service;
import net.likelion.picar.dto.CarResponseDto;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DealerService {
    private final DealerRepository dealerRepository;

    // 딜러 전체 get
    public List<DealerResponseDto> getAllDealers() {
        return dealerRepository.findAll().stream()
                .map(dealer -> DealerResponseDto.builder()
                        .id(dealer.getId())
                        .name(dealer.getName())
                        .affiliation(dealer.getAffiliation())
                        .position(dealer.getPosition())
                        .imagePath(cleanImagePath(dealer.getImagePath()))
                        .build())
                .collect(Collectors.toList());
    }

    // 딜러 id로 딜러 찾기
    public DealerResponseDto getDealerById(Long dealerId) {
        Dealer dealer = dealerRepository.findById(dealerId)
                .orElseThrow(() -> new IllegalArgumentException("해당 딜러가 존재하지 않습니다."));
        return new DealerResponseDto(
                dealer.getId(),
                dealer.getName(),
                dealer.getAffiliation(),
                dealer.getPosition(),
                cleanImagePath(dealer.getImagePath())
        );
    }

    // 딜러 id로 가지고 있는 차들 찾기
    public List<CarResponseDto> getCarsByDealerId(Long dealerId) {
        Dealer dealer = dealerRepository.findById(dealerId)
                .orElseThrow(() -> new IllegalArgumentException("딜러를 찾을 수 없습니다."));

        String cleanedDealerImagePath = cleanImagePath(dealer.getImagePath());

        return dealer.getCarList().stream().map(car -> {
            List<String> cleanedCarImagePaths = car.getImagePaths().stream()
                    .map(this::cleanImagePath)
                    .collect(Collectors.toList());

            return new CarResponseDto(
                    car.getId(),
                    car.getBrand(),
                    car.getModel(),
                    car.getModelYear(),
                    car.getReleaseDate().toString(),
                    car.getOrigin(),
                    car.getFuelType(),
                    car.getEngineDisplacement(),
                    car.getMileage(),
                    car.getSize(),
                    car.getSeatingCapacity(),
                    car.getPriceMin(),
                    car.getPriceMax(),
                    car.getMaintenanceCostMin(),
                    car.getMaintenanceCostMax(),
                    car.getSpecialNote(),
                    dealer.getName(),
                    dealer.getId(),
                    dealer.getPosition(),
                    cleanedCarImagePaths,
                    cleanedDealerImagePath
            );
        }).collect(Collectors.toList());
    }

    // /static 제거 함수 (null-safe)
    private String cleanImagePath(String path) {
        return path != null ? path.replace("/static", "") : null;
    }
}