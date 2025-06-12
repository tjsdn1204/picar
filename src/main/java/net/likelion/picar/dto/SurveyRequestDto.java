package net.likelion.picar.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

// 설문조사가 프론트에서 넘어오면 json으로 서버로 날라옴. 그걸 스프링의 @RequestBody를 이용해서 스프링의 jackson 라이브러리로 json-> dto(자바객체)로 바꿔줌
// jackson(requestbody)이 json을 자바 객체로 바꿀 때, 일단 기본 생성자로 생성(NoArgs..)하고 그 후에 setter같은걸로 필드값을 넣어야됨

@Getter
@NoArgsConstructor
public class SurveyRequestDto {
    private String familyType; // 가족 형태(2인가구, 3인가구..)
    private String purpose; // 차량 주 이용 목적(통근, 여행)
    private String fuelType; // 연료 형태
    private String fuelPerformancePreference; // 성능 vs 기능 우선시 하는것
    private String carOrigin; // 국산차 vs 해외차
    private int budgetRange; // 구입 예산 범위
    private int maintenanceRange; // 유지비용 예산 범위
    private int carSize; // 차량 크기
}
