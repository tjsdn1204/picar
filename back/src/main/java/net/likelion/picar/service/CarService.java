package net.likelion.picar.service;

import lombok.RequiredArgsConstructor;
import net.likelion.picar.domain.Car;
import net.likelion.picar.dto.CarDetailResponseDto;
import net.likelion.picar.dto.CarResponseDto;
import net.likelion.picar.repository.CarRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CarService {

    private final CarRepository carRepository;

    public List<CarResponseDto> getCarsByModel(String model) {
        return carRepository.findByModel(model).stream()
                .map(car -> {
                    List<String> cleanedImagePaths = car.getImagePaths().stream()
                            .map(path -> path.replace("/static", ""))
                            .collect(Collectors.toList());

                    String cleanedDealerImagePath = car.getDealer().getImagePath() != null
                            ? car.getDealer().getImagePath().replace("/static", "")
                            : null;

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
                            car.getDealer().getName(),
                            car.getDealer().getId(),
                            car.getDealer().getPosition(),
                            cleanedImagePaths,
                            cleanedDealerImagePath
                    );
                })
                .collect(Collectors.toList());
    }

    //차량 id로 상세 정보 조회
    public CarDetailResponseDto getCarDetailById(Long id) {
        Car car = carRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("해당 차량을 찾을 수 없습니다."));

        List<String> cleanedImagePaths = car.getImagePaths().stream()
                .map(path -> path.replace("/static", ""))
                .collect(Collectors.toList());

        String cleanedDealerImagePath = car.getDealer().getImagePath() != null
                ? car.getDealer().getImagePath().replace("/static", "")
                : null;

        return new CarDetailResponseDto(
                car.getId(),
                car.getBrand(),
                car.getModel(),
                car.getFuelType(),
                car.getOrigin(),
                car.getSeatingCapacity(),
                car.getSize(),
                car.getMaintenanceCostMin(),
                car.getMaintenanceCostMax(),
                car.getPriceMin(),
                car.getPriceMax(),
                car.getModelYear(),
                car.getReleaseDate().toString(),
                car.getMileage(),
                car.getEngineDisplacement(),
                car.getDealer().getName(),
                car.getDealer().getAffiliation(),
                car.getDealer().getId(),
                car.getDealer().getPosition(),
                cleanedImagePaths,
                cleanedDealerImagePath
        );
    }
}