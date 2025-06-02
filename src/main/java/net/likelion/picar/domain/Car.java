package net.likelion.picar.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import jakarta.persistence.GenerationType;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor // 모든 필드를 초기화하는 전체 생성자 생성
@Builder // Car.builder().brand("현대").price(1000)... 이렇게 유연한 객체 생성 방식 지원
public class Car {
    @Id //가장 가까운 필드가 id임을 선언
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 이 필드 값을 DB가 자동으로 생성. id가 1,2,3,4.. 이렇게 자동으로 생성
    private Long id; // primary key
    private String brand;          // 제조사
    private String model;          // 모델명
    private String fuelType;       // 연료 종류
    private double fuelEfficiency; // 연비
    private int horsepower;        // 마력
    private String origin;         // 국산 or 수입
    private int price;             // 가격 -> 만원단위
    private int maintenanceCost;   // 예상 연간 유지비 -> 만원단위
    private String size;           // 크기
    private String purposeTag;     // 이용 목적
}
