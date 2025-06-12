package net.likelion.picar.service;


import lombok.RequiredArgsConstructor;
import net.likelion.picar.dto.SurveyRequestDto;
import org.springframework.stereotype.Service;

@Service // 서비스임을 명시
@RequiredArgsConstructor // 의존성(di) 주입용.(아직은 없음)
public class SurveyService {
    public String processSurvey(SurveyRequestDto dto) {
        // 나중에 open API 연동하면 api호출 부분 들어갈 자리
        // 일단 확인용 테스트 코드만 작성
        return "설문 분석 결과: " + dto.getFamilyType() + "가족에게 적합한 차량을 추천할게요"; //postman테스트용
    }
}
