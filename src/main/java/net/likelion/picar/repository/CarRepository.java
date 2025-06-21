package net.likelion.picar.repository;
import net.likelion.picar.domain.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
    List<Car> findByModel(String model); // 이 메서드로 모델명으로 차량 리스트 조회
}
