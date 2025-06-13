package net.likelion.picar.controller;

import lombok.RequiredArgsConstructor;
import net.likelion.picar.dto.SurveyRequestDto; // 클라이언트에서 받은 설문조사 결과 담긴 객체
import net.likelion.picar.service.SurveyService;
import org.springframework.http.ResponseEntity; // http 상태코드와 응답 본문을 함께 반환
import org.springframework.web.bind.annotation.*; // Rest API 설정용 어노테이션들

@RestController // 프론트에서 보낸 요청을 반환할 때, 백엔드에서 json형식으로 반환해줌. 그냥 controller는 html을 렌더링해서 반환. 우리는 react랑 api통신이라 이거 사용
@RequestMapping("api/survey") // 이 클래스 내부의 모든 요청 경로는 api/survey붙음
@RequiredArgsConstructor // final필드는 자동으로 생성자를 주입해준다
public class SurveyController {
    private final SurveyService surveyService; // controller는 로직을 수행하는게 아니라서 service를 필드로 가지고 로직은 service에 위임

    @PostMapping
    public ResponseEntity<String> submitSurvey(@RequestBody SurveyRequestDto dto) { //
        String result = surveyService.processSurvey(dto); // ai 추천 로직과 연결될 부분
        return ResponseEntity.ok(result);
    }
}
