package net.likelion.picar.service;

import lombok.RequiredArgsConstructor;
import net.likelion.picar.dto.SurveyRequestDto;
import org.springframework.stereotype.Service;
import io.github.cdimascio.dotenv.Dotenv;
import okhttp3.*;
import java.io.IOException;

@Service // 서비스임을 명시
@RequiredArgsConstructor // 의존성(di) 주입용.(아직은 없음)
public class SurveyService {
    private final OkHttpClient client = new OkHttpClient(); //OpenAI 서버로 HTTP 요청을 보내기 위한 클라이언트 객체
    private final Dotenv dotenv = Dotenv.load(); // Dotenv.load()를 하면 루트 경로에 있는 .env 파일을 찾아서 키값 읽기 가능
    private final String OPENAI_API_KEY = dotenv.get("OPENAI_API_KEY"); // 환경변수 불러오는 코드

    // 설문내용 처리하는 로직
    public String processSurvey(SurveyRequestDto dto) {
        // 프롬프트 만드는 로직 자리
        String prompt = "설문 데이터를 기반으로 차량을 추천해줘 데이터는 다음과 같아: " + dto.getFamilyType() + " " + dto.getFuelType()
                + dto.getBudgetRange() + " " + dto.getMaintenanceRange() + "만원, " + dto.getPurpose() + " "
                + dto.getCarOrigin() + " " + dto.getFuelPerformancePreference() + " 이 내용들을 기반으로 이유와 차 이름을 말해줘";
        try {
            String response = sendOpenAIRequest(prompt);
            return response;
        } catch (IOException e) {
            e.printStackTrace();
            return "AI 응답 실패: " + e.getMessage();
        }
    }

    // OpenAI로 실제 요청 보내고 응답 받는 메서드
    private String sendOpenAIRequest(String prompt) throws IOException { // prompt값은 유저 설문 내용 기반. IOException는 통신 오류 대비
        MediaType mediaType = MediaType.parse("application/json"); // 요청하는 본문이 json임을 명시하기. postman에서 Content-Type: application/json
        String bodyJson = "{"
                + "\"model\":\"gpt-3.5-turbo\","
                + "\"messages\":[{\"role\":\"user\",\"content\":\"" + prompt + "\"}]" // "role": "user"는 유저의 질문, "content": prompt는 우리가 만든 문장
                + "}";

        RequestBody body = RequestBody.create(mediaType, bodyJson);
        Request request = new Request.Builder()
                .url("https://api.openai.com/v1/chat/completions") //ChatGPT API의 엔드포인트. post방식으로 보냄
                .post(body)
                .addHeader("Content-Type", "application/json")
                .addHeader("Authorization", "Bearer " + OPENAI_API_KEY)
                .build();

        Response response = client.newCall(request).execute();
        return response.body().string();
    }
}
