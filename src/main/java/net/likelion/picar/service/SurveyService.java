package net.likelion.picar.service;

import lombok.RequiredArgsConstructor;
import net.likelion.picar.domain.Car;
import net.likelion.picar.dto.SurveyRequestDto;
import net.likelion.picar.repository.CarRepository;
import org.springframework.stereotype.Service;
import io.github.cdimascio.dotenv.Dotenv;
import okhttp3.*;
import java.io.IOException;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service // 서비스임을 명시
@RequiredArgsConstructor // 의존성(di) 주입용.(아직은 없음)
public class SurveyService {
    private final OkHttpClient client = new OkHttpClient(); //OpenAI 서버로 HTTP 요청을 보내기 위한 클라이언트 객체
    private final Dotenv dotenv = Dotenv.load(); // Dotenv.load()를 하면 루트 경로에 있는 .env 파일을 찾아서 키값 읽기 가능
    private final String OPENAI_API_KEY = dotenv.get("OPENAI_API_KEY"); // 환경변수 불러오는 코드
    private final CarRepository carRepository;

    // 설문내용 처리하는 로직
    public String processSurvey(SurveyRequestDto dto) {
        // 1. DB에서 차량 모델명 리스트 수집
        List<String> modelNames = carRepository.findAll().stream()
                .map(Car::getModel)
                .collect(Collectors.toList());
        String modelList = String.join(", ", modelNames);

        // 2. GPT에게 줄 프롬프트 구성
        String prompt = "설문 데이터를 기반으로 차량을 추천해줘.\n" +
                "데이터: 가족형태 = " + dto.getFamilyType() +
                ", 연료유형 = " + dto.getFuelType() +
                ", 예산 = " + dto.getBudgetRange() +
                ", 유지비 = " + dto.getMaintenanceRange() +
                ", 용도 = " + dto.getPurpose() +
                ", 제조국 = " + dto.getCarOrigin() +
                ", 연비 중시도 = " + dto.getFuelPerformancePreference() + "\n" +
                "아래는 추천 가능한 차량 리스트야:\n[" + modelList + "]\n" +
                "이 중에서 3개만 골라서 JSON 배열로 정확히 반환해줘. 다른 말은 하지 말고 JSON 배열만 줘.\n" +
                "예: [\"BMW 320d\", \"벤츠 C220d\", \"아우디 A4\"]";

        try {
            String response = sendOpenAIRequest(prompt);
            return response;
        } catch (IOException e) {
            e.printStackTrace();
            return "AI 응답 실패: " + e.getMessage();
        }
    }

    // OpenAI로 실제 요청 보내고 응답 받는 메서드
    private String sendOpenAIRequest(String prompt) throws IOException {
        MediaType mediaType = MediaType.parse("application/json");

        JsonObject messageObj = new JsonObject();
        messageObj.addProperty("role", "user");
        messageObj.addProperty("content", prompt);

        JsonObject requestBody = new JsonObject();
        requestBody.addProperty("model", "gpt-3.5-turbo");
        requestBody.add("messages", new Gson().toJsonTree(new JsonObject[]{messageObj}));

        RequestBody body = RequestBody.create(mediaType, requestBody.toString());

        Request request = new Request.Builder()
                .url("https://api.openai.com/v1/chat/completions")
                .post(body)
                .addHeader("Content-Type", "application/json")
                .addHeader("Authorization", "Bearer " + OPENAI_API_KEY)
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                throw new IOException("응답 실패: " + response);
            }

            String responseBody = response.body().string();

            // GPT 응답에서 message.content만 추출
            JsonObject json = new Gson().fromJson(responseBody, JsonObject.class);
            String content = json
                    .getAsJsonArray("choices")
                    .get(0).getAsJsonObject()
                    .getAsJsonObject("message")
                    .get("content").getAsString();

            return content; // 예: ["BMW 320d", "벤츠 C220d", "아우디 A4"]
        }
    }
}
