package net.likelion.picar.config;

import lombok.RequiredArgsConstructor;
import net.likelion.picar.domain.Car;
import net.likelion.picar.domain.Dealer;
import net.likelion.picar.repository.CarRepository;
import net.likelion.picar.repository.DealerRepository;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.*;

@Component
@RequiredArgsConstructor
public class DataInitializer implements ApplicationRunner {

    private final CarRepository carRepository;
    private final DealerRepository dealerRepository;
    // 문자열/숫자/Double/null -> Integer
    private Integer parseIntSafe(Object value) {
        if (value == null) return null;
        if (value instanceof Number) return ((Number) value).intValue();
        try {
            String str = value.toString().trim();
            if (str.equalsIgnoreCase("null") || str.isEmpty()) return null;
            return (int) Double.parseDouble(str);
        } catch (NumberFormatException e) {
            return null;
        }
    }

    @Override
    public void run(ApplicationArguments args) {
        // DB가 비어 있는 경우에만 데이터 삽입 (중복 방지)
        if (dealerRepository.count() == 0 && carRepository.count() == 0) {
            // 딜러 5명 생성 및 저장
            Dealer d1 = dealerRepository.save(Dealer.builder().name("최지원").affiliation("멋사중고차").imagePath("/static/images/dealers/dealer_1.jpg").position("실장").build());
            Dealer d2 = dealerRepository.save(Dealer.builder().name("이상민").affiliation("ICT모터스").imagePath("/static/images/dealers/dealer_2.jpg").position("지점장").build());
            Dealer d3 = dealerRepository.save(Dealer.builder().name("이수빈").affiliation("드림오토").imagePath("/static/images/dealers/dealer_3.jpg").position("과장").build());
            Dealer d4 = dealerRepository.save(Dealer.builder().name("김현준").affiliation("청년카딜러스").imagePath("/static/images/dealers/dealer_4.jpg").position("대리").build());
            Dealer d5 = dealerRepository.save(Dealer.builder().name("박민수").affiliation("에이스카").imagePath("/static/images/dealers/dealer_5.jpg").position("부장").build());


            Map<Long, Dealer> dealerMap = new HashMap<>();
            dealerMap.put(d1.getId(), d1);
            dealerMap.put(d2.getId(), d2);
            dealerMap.put(d3.getId(), d3);
            dealerMap.put(d4.getId(), d4);
            dealerMap.put(d5.getId(), d5);

            // 차량 데이터 정의
            Object[][] carData = {
                    {"Hyundai", "AVANTE_AD", "2019", "2019-05-13", "국산차", "휘발유", 1997, 30000, "준중형", 5, 0, 1000, 500, 50, 80, "판금 / 1인 신조 차량", d1.getId(), Arrays.asList("/static/images/cars/AVANTE_AD_1.jpg", "/static/images/cars/AVANTE_AD_2.jpg", "/static/images/cars/AVANTE_AD_3.jpg")},
                    {"Hyundai", "AVANTE_AD", "2021", "2021-08-09", "국산차", "휘발유", 1996, 25000, "준중형", 5, 0, 1000, 500, 50, 80, "단순 교체 / 짧은 키로수", d1.getId(), Arrays.asList("/static/images/cars/AVANTE_AD_1.jpg", "/static/images/cars/AVANTE_AD_2.jpg", "/static/images/cars/AVANTE_AD_3.jpg")},
                    {"Hyundai", "Sonata_LF", "2019", "2019-05-13", "국산차", "LPG", 1997, 30000, "중형", 5, 0, 1000, 500, 50, 80, "판금 / 1인 신조 차량", d2.getId(), Arrays.asList("/static/images/cars/Sonata_LF_1.jpg", "/static/images/cars/Sonata_LF_2.jpg", "/static/images/cars/Sonata_LF_3.jpg")},
                    {"Hyundai", "Sonata_LF", "2021", "2021-08-09", "국산차", "LPG", 1996, 25000, "중형", 5, 0, 1000, 500, 50, 80, "단순 교체 / 짧은 키로수", d2.getId(), Arrays.asList("/static/images/cars/Sonata_LF_1.jpg", "/static/images/cars/Sonata_LF_2.jpg", "/static/images/cars/Sonata_LF_3.jpg")},
                    {"Infiniti", "Q50", "2019", "2019-05-13", "외제차", "경유", 1997, 30000, "중형", 5, 0, 1000, 500, 30, 50, "판금 / 1인 신조 차량", d3.getId(), Arrays.asList("/static/images/cars/Q50_1.jpg", "/static/images/cars/Q50_2.jpg", "/static/images/cars/Q50_3.jpg")},
                    {"Infiniti", "Q50", "2021", "2021-08-09", "외제차", "경유", 1996, 25000, "중형", 5, 0, 1000, 500, 30, 50, "단순 교체 / 짧은 키로수", d3.getId(), Arrays.asList("/static/images/cars/Q50_1.jpg", "/static/images/cars/Q50_2.jpg", "/static/images/cars/Q50_3.jpg")},
                    {"Kia", "Morning_JA", "2019", "2019-05-13", "국산차", "LPG", 1997, 30000, "경차", 5, 0, 1000, 500, 0, 30, "판금 / 1인 신조 차량", d4.getId(), Arrays.asList("/static/images/cars/morning_JA_1.jpg", "/static/images/cars/morning_JA_2.jpg", "/static/images/cars/morning_JA_3.jpg")},
                    {"Kia", "Morning_JA", "2021", "2021-08-09", "국산차", "LPG", 1996, 25000, "경차", 5, 0, 1000, 500, 0, 30, "단순 교체 / 짧은 키로수", d4.getId(), Arrays.asList("/static/images/cars/morning_JA_1.jpg", "/static/images/cars/morning_JA_2.jpg", "/static/images/cars/morning_JA_3.jpg")},
                    {"Kia", "K7", "2019", "2019-05-13", "국산차", "휘발유", 1997, 30000, "준대형", 5, 1000, 2000, 1500, 80, 100, "판금 / 1인 신조 차량", d5.getId(), Arrays.asList("/static/images/cars/K7_1.jpg", "/static/images/cars/K7_2.jpg", "/static/images/cars/K7_3.jpg")},
                    {"Kia", "K7", "2021", "2021-08-09", "국산차", "휘발유", 1996, 25000, "준대형", 5, 1000, 2000, 1500, 80, 100, "단순 교체 / 짧은 키로수", d5.getId(), Arrays.asList("/static/images/cars/K7_1.jpg", "/static/images/cars/K7_2.jpg", "/static/images/cars/K7_3.jpg")},
                    {"Kia", "Niro", "2019", "2019-05-13", "국산차", "친환경(전기, 수소)", 1997, 30000, "준중형", 5, 1000, 2000, 1500, 0, 30, "판금 / 1인 신조 차량", d1.getId(), Arrays.asList("/static/images/cars/Niro_1.jpg", "/static/images/cars/Niro_2.jpg", "/static/images/cars/Niro_3.jpg")},
                    {"Kia", "Niro", "2021", "2021-08-09", "국산차", "친환경(전기, 수소)", 1996, 25000, "준중형", 5, 1000, 2000, 1500, 0, 30, "단순 교체 / 짧은 키로수", d1.getId(), Arrays.asList("/static/images/cars/Niro_1.jpg", "/static/images/cars/Niro_2.jpg", "/static/images/cars/Niro_3.jpg")},
                    {"Kia", "The_New_Carnival", "2019", "2019-05-13", "국산차", "경유", 1997, 30000, "대형", 9, 1000, 2000, 1500, 50, 80, "판금 / 1인 신조 차량", d2.getId(), Arrays.asList("/static/images/cars/The_New_Carnival_1.jpg", "/static/images/cars/The_New_Carnival_2.jpg", "/static/images/cars/The_New_Carnival_3.jpg")},
                    {"Kia", "The_New_Carnival", "2021", "2021-08-09", "국산차", "경유", 1996, 25000, "대형", 9, 1000, 2000, 1500, 50, 80, "단순 교체 / 짧은 키로수", d2.getId(), Arrays.asList("/static/images/cars/The_New_Carnival_1.jpg", "/static/images/cars/The_New_Carnival_2.jpg", "/static/images/cars/The_New_Carnival_3.jpg")},
                    {"Kia", "The_New_Lay", "2019", "2019-05-13", "국산차", "휘발유", 1997, 30000, "경차", 4, 1000, 2000, 1500, 50, 80, "판금 / 1인 신조 차량", d3.getId(), Arrays.asList("/static/images/cars/The_New_Lay_1.jpg", "/static/images/cars/The_New_Lay_2.jpg", "/static/images/cars/The_New_Lay_3.jpg")},
                    {"Kia", "The_New_Lay", "2021", "2021-08-09", "국산차", "휘발유", 1996, 25000, "경차", 4, 1000, 2000, 1500, 50, 80, "단순 교체 / 짧은 키로수", d3.getId(), Arrays.asList("/static/images/cars/The_New_Lay_1.jpg", "/static/images/cars/The_New_Lay_2.jpg", "/static/images/cars/The_New_Lay_3.jpg")},
                    {"MINI", "Cooper_5-Door", "2019", "2019-05-13", "외제차", "휘발유", 1997, 30000, "소형", 5, 2000, 2000, 2000, 30, 50, "판금 / 1인 신조 차량", d4.getId(), Arrays.asList("/static/images/cars/Cooper_5-Door_1.jpg", "/static/images/cars/Cooper_5-Door_2.jpg", "/static/images/cars/Cooper_5-Door_3.jpg")},
                    {"MINI", "Cooper_5-Door", "2021", "2021-08-09", "외제차", "휘발유", 1996, 25000, "소형", 5, 2000, 2000, 2000, 30, 50, "단순 교체 / 짧은 키로수", d4.getId(), Arrays.asList("/static/images/cars/Cooper_5-Door_1.jpg", "/static/images/cars/Cooper_5-Door_2.jpg", "/static/images/cars/Cooper_5-Door_3.jpg")},
                    {"Kia", "K7_Premier", "2019", "2019-05-13", "국산차", "휘발유", 1997, 30000, "준대형", 5, 2000, 3000, 2500, 50, 80, "판금 / 1인 신조 차량", d5.getId(), Arrays.asList("/static/images/cars/K7-Premier_1.jpg", "/static/images/cars/K7-Premier_2.jpg", "/static/images/cars/K7-Premier_3.jpg")},
                    {"Kia", "K7_Premier", "2021", "2021-08-09", "국산차", "휘발유", 1996, 25000, "준대형", 5, 2000, 3000, 2500, 50, 80, "단순 교체 / 짧은 키로수", d5.getId(), Arrays.asList("/static/images/cars/K7-Premier_1.jpg", "/static/images/cars/K7-Premier_2.jpg", "/static/images/cars/K7-Premier_3.jpg")},
                    {"Hyundai", "Palisade", "2019", "2019-05-13", "국산차", "경유", 1997, 30000, "대형", 7, 2000, 3000, 2500, 80, 100, "판금 / 1인 신조 차량", d1.getId(), Arrays.asList("/static/images/cars/Palisade_1.jpg", "/static/images/cars/Palisade_2.jpg", "/static/images/cars/Palisade_3.jpg")},
                    {"Hyundai", "Palisade", "2021", "2021-08-09", "국산차", "경유", 1996, 25000, "대형", 7, 2000, 3000, 2500, 80, 100, "단순 교체 / 짧은 키로수", d1.getId(), Arrays.asList("/images/cars/Palisade_1.jpg", "/static/images/cars/Palisade_2.jpg", "/static/images/cars/Palisade_3.jpg")},
                    {"Mercedes-Benz", "GLS", "2019", "2019-05-13", "외제차", "경유", 1997, 30000, "대형", 7, 4000, 5000, 4500, 50, 80, "판금 / 1인 신조 차량", d2.getId(), Arrays.asList("/static/images/cars/GLS_1.jpg", "/static/images/cars/GLS_2.jpg", "/static/images/cars/GLS_3.jpg")},
                    {"Mercedes-Benz", "GLS", "2021", "2021-08-09", "외제차", "경유", 1996, 25000, "대형", 7, 4000, 5000, 4500, 50, 80, "단순 교체 / 짧은 키로수", d2.getId(), Arrays.asList("/static/images/cars/GLS_1.jpg", "/static/images/cars/GLS_2.jpg", "/static/images/cars/GLS_3.jpg")},
                    {"Kia", "The_New_K9", "2019", "2019-05-13", "국산차", "휘발유", 1997, 30000, "대형", 5, 4000, 5000, 4500, 50, 80, "판금 / 1인 신조 차량", d3.getId(), Arrays.asList("/static/images/cars/The_New_K9_1.jpg", "/static/images/cars/The_New_K9_2.jpg", "/static/images/cars/The_New_K9_3.jpg")},
                    {"Kia", "The_New_K9", "2021", "2021-08-09", "국산차", "휘발유", 1996, 25000, "대형", 5, 4000, 5000, 4500, 50, 80, "단순 교체 / 짧은 키로수", d3.getId(), Arrays.asList("/static/images/cars/The_New_K9_1.jpg", "/static/images/cars/The_New_K9_2.jpg", "/static/images/cars/The_New_K9_3.jpg")},
                    {"Land_Rover", "Range_Rover_Velar", "2019", "2019-05-13", "외제차", "경유", 1997, 30000, "준대형", 5, 4000, 5000, 4500, 30, 50, "판금 / 1인 신조 차량", d4.getId(), Arrays.asList("/static/images/cars/range_rover_velar_1.jpg", "/static/images/cars/range_rover_velar_2.jpg", "/static/images/cars/range_rover_velar_3.jpg")},
                    {"Land_Rover", "Range_Rover_Velar", "2021", "2021-08-09", "외제차", "경유", 1996, 25000, "준대형", 5, 4000, 5000, 4500, 30, 50, "단순 교체 / 짧은 키로수", d4.getId(), Arrays.asList("/static/images/cars/range_rover_velar_1.jpg", "/static/images/cars/range_rover_velar_2.jpg", "/static/images/cars/range_rover_velar_3.jpg")},
                    {"Genesis", "Genesis_G80", "2019", "2019-05-13", "국산차", "휘발유", 1997, 30000, "준대형", 5, 5000, 6000, 5500, 50, 80, "판금 / 1인 신조 차량", d5.getId(), Arrays.asList("/static/images/cars/Genesis_G80_1.jpg", "/static/images/cars/Genesis_G80_2.jpg", "/static/images/cars/Genesis_G80_3.jpg")},
                    {"Genesis", "Genesis_G80", "2021", "2021-08-09", "국산차", "휘발유", 1996, 25000, "준대형", 5, 5000, 6000, 5500, 50, 80, "단순 교체 / 짧은 키로수", d5.getId(), Arrays.asList("/static/images/cars/Genesis_G80_1.jpg", "/static/images/cars/Genesis_G80_2.jpg", "/static/images/cars/Genesis_G80_3.jpg")},
                    {"Maserati", "Levante", "2019", "2019-05-13", "외제차", "휘발유", 1997, 30000, "준대형", 5, 5000, 6000, 5500, 150, null, "판금 / 1인 신조 차량", d2.getId(), Arrays.asList("/static/images/cars/Levante_1.jpg", "/static/images/cars/Levante_2.jpg", "/static/images/cars/Levante_3.jpg")},
                    {"Maserati", "Levante", "2021", "2021-08-09", "외제차", "휘발유", 1996, 25000, "준대형", 5, 5000, 6000, 5500, 150, null, "단순 교체 / 짧은 키로수", d2.getId(), Arrays.asList("/static/images/cars/Levante_1.jpg", "/static/images/cars/Levante_2.jpg", "/static/images/cars/Levante_3.jpg")},
                    {"Ford", "Bronco_U725", "2019", "2019-05-13", "외제차", "휘발유", 1997, 30000, "대형", 5, 5000, 6000, 5500, 80, 100, "판금 / 1인 신조 차량", d3.getId(), Arrays.asList("/static/images/cars/Bronco_U725_1.jpg", "/static/images/cars/Bronco_U725_2.jpg", "/static/images/cars/Bronco_U725_3.jpg")},
                    {"Ford", "Bronco_U725", "2021", "2021-08-09", "외제차", "휘발유", 1996, 25000, "대형", 5, 5000, 6000, 5500, 80, 100, "단순 교체 / 짧은 키로수", d3.getId(), Arrays.asList("/static/images/cars/Bronco_U725_1.jpg", "/static/images/cars/Bronco_U725_2.jpg", "/static/images/cars/Bronco_U725_3.jpg")},
                    {"Genesis", "Genesis_GV70", "2019", "2019-05-13", "국산차", "휘발유", 1997, 30000, "준중형", 5, 5000, 6000, 5500, 50, 80, "판금 / 1인 신조 차량", d5.getId(), Arrays.asList("/static/images/cars/Genesis_G70_1.jpg", "/static/images/cars/Genesis_G70_2.jpg", "/static/images/cars/Genesis_G70_3.jpg")},
                    {"Genesis", "Genesis_GV70", "2021", "2021-08-09", "국산차", "휘발유", 1996, 25000, "준중형", 5, 5000, 6000, 5500, 50, 80, "단순 교체 / 짧은 키로수", d5.getId(), Arrays.asList("/static/images/cars/Genesis_G70_1.jpg", "/static/images/cars/Genesis_G70_2.jpg", "/static/images/cars/Genesis_G70_3.jpg")},
                    {"BMW", "New_5_Series_G60", "2019", "2019-05-13", "외제차", "친환경(전기, 수소)", 1997, 30000, "준중형", 5, 7000, 8000, 7500, 30, 50, "판금 / 1인 신조 차량", d1.getId(), Arrays.asList("/static/images/cars/New_5_Series_G60_1.jpg", "/static/images/cars/New_5_Series_G60_2.jpg", "/static/images/cars/New_5_Series_G60_3.jpg")},
                    {"BMW", "New_5_Series_G60", "2021", "2021-08-09", "외제차", "친환경(전기, 수소)", 1996, 25000, "준중형", 5, 7000, 8000, 7500, 30, 50, "단순 교체 / 짧은 키로수", d1.getId(), Arrays.asList("/static/images/cars/New_5_Series_G60_1.jpg", "/static/images/cars/New_5_Series_G60_2.jpg", "/static/images/cars/New_5_Series_G60_3.jpg")},
                    {"Genesis", "Genesis_GV80_Coupe", "2019", "2019-05-13", "국산차", "휘발유", 1997, 30000, "준대형", 5, 7000, 8000, 7500, 80, 100, "판금 / 1인 신조 차량", d5.getId(), Arrays.asList("/static/images/cars/Genesis_GV80_Coupe_1.jpg", "/static/images/cars/Genesis_GV80_Coupe_2.jpg", "/static/images/cars/Genesis_GV80_Coupe_3.jpg")},
                    {"Genesis", "Genesis_GV80_Coupe", "2021", "2021-08-09", "국산차", "휘발유", 1996, 25000, "준대형", 5, 7000, 8000, 7500, 80, 100, "단순 교체 / 짧은 키로수", d5.getId(), Arrays.asList("/static/images/cars/Genesis_GV80_Coupe_1.jpg", "/static/images/cars/Genesis_GV80_Coupe_2.jpg", "/static/images/cars/Genesis_GV80_Coupe_3.jpg")},
                    {"Mercedes-Benz", "EQS_V297", "2019", "2019-05-13", "외제차", "친환경(전기, 수소)", 1997, 30000, "대형", 5, 7000, 8000, 7500, 50, 80, "판금 / 1인 신조 차량", d4.getId(), Arrays.asList("/static/images/cars/EQS_V297_1.jpg", "/static/images/cars/EQS_V297_2.jpg", "/static/images/cars/EQS_V297_3.jpg")},
                    {"Mercedes-Benz", "EQS_V297", "2021", "2021-08-09", "외제차", "친환경(전기, 수소)", 1996, 25000, "대형", 5, 7000, 8000, 7500, 50, 80, "단순 교체 / 짧은 키로수", d4.getId(), Arrays.asList("/static/images/cars/EQS_V297_1.jpg", "/static/images/cars/EQS_V297_2.jpg", "/static/images/cars/EQS_V297_3.jpg")},
                    {"BMW", "X5_G05", "2019", "2019-05-13", "외제차", "친환경(전기, 수소)", 1997, 30000, "대형", 5, 8000, 9000, 8500, 50, 80, "판금 / 1인 신조 차량", d1.getId(), Arrays.asList("/static/images/cars/X5_G05_1.jpg", "/static/images/cars/X5_G05_2.jpg", "/static/images/cars/X5_G05_3.jpg")},
                    {"BMW", "X5_G05", "2021", "2021-08-09", "외제차", "친환경(전기, 수소)", 1996, 25000, "대형", 5, 8000, 9000, 8500, 50, 80, "단순 교체 / 짧은 키로수", d1.getId(), Arrays.asList("/static/images/cars/X5_G05_1.jpg", "/static/images/cars/X5_G05_2.jpg", "/static/images/cars/X5_G05_3.jpg")},
                    {"Genesis", "Genesis_G90_R34", "2019", "2019-05-13", "국산차", "휘발유", 1997, 30000, "대형", 5, 8000, 9000, 8500, 50, 80, "판금 / 1인 신조 차량", d5.getId(), Arrays.asList("/static/images/cars/Genesis_G90_R34_1.jpg", "/static/images/cars/Genesis_G90_R34_2.jpg", "/static/images/cars/Genesis_G90_R34_3.jpg")},
                    {"Genesis", "Genesis_G90_R34", "2021", "2021-08-09", "국산차", "휘발유", 1996, 25000, "대형", 5, 8000, 9000, 8500, 50, 80, "단순 교체 / 짧은 키로수", d3.getId(), Arrays.asList("/static/images/cars/Genesis_G90_R34_1.jpg", "/static/images/cars/Genesis_G90_R34_2.jpg", "/static/images/cars/Genesis_G90_R34_3.jpg")},
                    {"Tesla", "Model_X", "2019", "2019-05-13", "외제차", "친환경(전기, 수소)", 1997, 30000, "대형", 5, 8000, 9000, 8500, 50, 80, "판금 / 1인 신조 차량", d1.getId(), Arrays.asList("/static/images/cars/Model_X_1.jpg", "/static/images/cars/Model_X_2.jpg", "/static/images/cars/Model_X_3.jpg")},
                    {"Tesla", "Model_X", "2021", "2021-08-09", "외제차", "친환경(전기, 수소)", 1996, 25000, "대형", 5, 8000, 9000, 8500, 50, 80, "단순 교체 / 짧은 키로수", d1.getId(), Arrays.asList("/static/images/cars/Model_X_1.jpg", "/static/images/cars/Model_X_2.jpg", "/static/images/cars/Model_X_3.jpg")},
                    {"Hyundai", "i30_PD", "2019", "2019-05-13", "국산차", "휘발유", 1997, 30000, "준중형", 5, 9000, 10000, 9500, 30, 50, "판금 / 1인 신조 차량", d1.getId(), Arrays.asList("/static/images/cars/i30_PD_1.jpg", "/static/images/cars/i30_PD_2.jpg", "/static/images/cars/i30_PD_3.jpg")},
                    {"Hyundai", "i30_PD", "2021", "2021-08-09", "국산차", "휘발유", 1996, 25000, "준중형", 5, 9000, 10000, 9500, 30, 50, "단순 교체 / 짧은 키로수", d1.getId(), Arrays.asList("/static/images/cars/i30_PD_1.jpg", "/static/images/cars/i30_PD_2.jpg", "/static/images/cars/i30_PD_3.jpg")},
                    {"Hyundai", "Santa_Fe", "2019", "2019-05-13", "국산차", "경유", 1997, 30000, "중형", 5, 9000, 10000, 9500, 0, 30, "판금 / 1인 신조 차량", d1.getId(), Arrays.asList("/static/images/cars/Santa_Fe_1.jpg", "/static/images/cars/Santa_Fe_2.jpg", "/static/images/cars/Santa_Fe_3.jpg")},
                    {"Hyundai", "Santa_Fe", "2021", "2021-08-09", "국산차", "경유", 1996, 25000, "중형", 5, 9000, 10000, 9500, 0, 30, "단순 교체 / 짧은 키로수", d1.getId(), Arrays.asList("/static/images/cars/Santa_Fe_1.jpg", "/static/images/cars/Santa_Fe_2.jpg", "/static/images/cars/Santa_Fe_3.jpg")},
                    {"Audi", "e-tron_GT", "2019", "2019-05-13", "외제차", "친환경(전기, 수소)", 1997, 30000, "대형", 5, 9000, 10000, 9500, 50, 80, "판금 / 1인 신조 차량", d2.getId(), Arrays.asList("/static/images/cars/e-tron_GT_1.jpg", "/static/images/cars/e-tron_GT_2.jpg", "/static/images/cars/e-tron_GT_3.jpg")},
                    {"Audi", "e-tron_GT", "2021", "2021-08-09", "외제차", "친환경(전기, 수소)", 1996, 20000, "대형", 5, 9000, 10000, 9500, 50, 80, "단순 교체 / 짧은 키로수", d2.getId(), Arrays.asList("/static/images/cars/e-tron_GT_1.jpg", "/static/images/cars/e-tron_GT_2.jpg", "/static/images/cars/e-tron_GT_3.jpg")},
                    {"Mercedes-Benz", "S-Class_W223", "2019", "2019-05-13", "외제차", "경유", 1997, 30000, "대형", 5, 10000, null, 10000, 0, 30, "판금 / 1인 신조 차량", d4.getId(), Arrays.asList("/static/images/cars/S-class_W223_1.jpg", "/static/images/cars/S-class_W223_2.jpg", "/static/images/cars/S-class_W223_3.jpg")},
                    {"Mercedes-Benz", "S-Class_W223", "2021", "2021-08-09", "외제차", "경유", 1996, 25000, "대형", 5, 10000, null, 10000, 0, 30, "단순 교체 / 짧은 키로수", d4.getId(), Arrays.asList("/static/images/cars/S-class_W223_1.jpg", "/static/images/cars/S-class_W223_2.jpg", "/static/images/cars/S-class_W223_3.jpg")},
                    {"BMW", "M4_Coupe_G82", "2019", "2019-05-13", "외제차", "휘발유", 1997, 30000, "중형", 4, 10000, null, 10000, 80, 100, "판금 / 1인 신조 차량", d3.getId(), Arrays.asList("/static/images/cars/M4_Coupe_G82_1.jpg", "/static/images/cars/M4_Coupe_G82_2.jpg", "/static/images/cars/M4_Coupe_G82_3.jpg")},
                    {"BMW", "M4_Coupe_G82", "2021", "2021-08-09", "외제차", "휘발유", 1996, 25000, "중형", 4, 10000, null, 10000, 80, 100, "단순 교체 / 짧은 키로수", d3.getId(), Arrays.asList("/static/images/cars/M4_Coupe_G82_1.jpg", "/static/images/cars/M4_Coupe_G82_2.jpg", "/static/images/cars/M4_Coupe_G82_3.jpg")},
                    {"Renault_Korea", "SM6", "2019", "2019-05-13", "국산차", "경유", 1997, 30000, "중형", 5, 10000, null, 10000, 0, 30, "판금 / 1인 신조 차량", d5.getId(), Arrays.asList("/static/images/cars/SM6_1.jpg", "/static/images/cars/SM6_2.jpg", "/static/images/cars/SM6_3.jpg")},
                    {"Renault_Korea", "SM6", "2021", "2021-08-09", "국산차", "경유", 1996, 25000, "중형", 5, 10000, null, 10000, 0, 30, "단순 교체 / 짧은 키로수", d5.getId(), Arrays.asList("/static/images/cars/SM6_1.jpg", "/static/images/cars/SM6_2.jpg", "/static/images/cars/SM6_3.jpg")}
            };

            for (Object[] row : carData) {
                // imagePaths: row[17] → List<String>
                List<String> imagePaths = new ArrayList<>();
                if (row[17] instanceof List<?>) {
                    for (Object o : (List<?>) row[17]) {
                        if (o instanceof String s) {
                            imagePaths.add(s);
                        }
                    }
                }

                // dealerId: row[16] → Long
                Long dealerId = (Long) row[16];
                Dealer dealer = dealerMap.get(dealerId);

                carRepository.save(Car.builder()
                        .brand((String) row[0])
                        .model((String) row[1])
                        .modelYear(Integer.parseInt(row[2].toString()))
                        .releaseDate(LocalDate.parse(row[3].toString()))
                        .origin((String) row[4])
                        .fuelType((String) row[5])
                        .engineDisplacement(Integer.parseInt(row[6].toString()))
                        .mileage(Integer.parseInt(row[7].toString()))
                        .size((String) row[8])
                        .seatingCapacity(Integer.parseInt(row[9].toString()))
                        .priceMin(parseIntSafe(row[10]))
                        .priceMax(parseIntSafe(row[11]))
                        .finalPrice(parseIntSafe(row[12]))
                        .maintenanceCostMin(parseIntSafe(row[13]))
                        .maintenanceCostMax(parseIntSafe(row[14]))
                        .specialNote((String) row[15])
                        .dealer(dealer)              // ✅ 명시적으로 dealer 객체 사용
                        .imagePaths(imagePaths)      // ✅ 명시적으로 image 리스트 사용
                        .build());
            }
        }
    }
}
