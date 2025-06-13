package net.likelion.picar.domain;

import jakarta.persistence.*;
import lombok.*;


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
    private String origin;         // 국산 or 수입
    private int maintenanceCostMin;   // 유지비 하한
    private Integer maintenanceCostMax; // 유지비 상한 (null 허용)
    private int priceMin;             // 가격 하한 (만원 단위)
    private Integer priceMax;             // 가격 상한
    private String size;           // 크기
    private String purposeTag;     // 이용 목적
    @Column(name = "seating_capacity")
    private int seatingCapacity;      // 좌석 수

    @ManyToOne // Car : Dealer = N : 1 그래서 ManyOoOne
    @JoinColumn(name = "dealer_id") // 이 필드를 외래키로 쓰겠다는 뜻. db테이블에서 외래키 컬럼 이름을 dealer_id로 하겠다는 뜻. 원래 자동으로 dealer_id로 함
    private Dealer dealer; // @JoinColumn 어노테이션을 썼으면 바로 아래에 외래키의 대상이 될 엔터티를 명시해야됨 왼쪽에 쓴 것 처럼

}
