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
        // // DB가 비어 있는 경우에만 데이터 삽입 (중복 방지)
        if (dealerRepository.count() == 0 && carRepository.count() == 0) {
            // 딜러 5명 생성 및 저장
            Dealer d1 = dealerRepository.save(Dealer.builder().name("최지원").affiliation("멋사중고차").build());
            Dealer d2 = dealerRepository.save(Dealer.builder().name("이상민").affiliation("ICT모터스").build());
            Dealer d3 = dealerRepository.save(Dealer.builder().name("이수빈").affiliation("드림오토").build());
            Dealer d4 = dealerRepository.save(Dealer.builder().name("김현준").affiliation("청년카딜러스").build());
            Dealer d5 = dealerRepository.save(Dealer.builder().name("박민수").affiliation("에이스카").build());

            Map<Long, Dealer> dealerMap = new HashMap<>();
            dealerMap.put(d1.getId(), d1);
            dealerMap.put(d2.getId(), d2);
            dealerMap.put(d3.getId(), d3);
            dealerMap.put(d4.getId(), d4);
            dealerMap.put(d5.getId(), d5);

            // 차량 데이터 정의
            Object[][] carData = {
                    {"Hyundai", "AVANTE_AD", "2019", "2019-05-13", "국산차", "휘발유", 1997, "30000", "준중형", 5, 0, 1000.0, 50, 80, "판금 / 1인 신조 차량", d1.getId()},
                    {"Hyundai", "AVANTE_AD", "2021", "2021-08-09", "국산차", "휘발유", 1996, "25000", "준중형", 5, 0, 1000.0, 50, 80, "단순 교체 / 짧은 키로수", d1.getId()},
                    {"Hyundai", "Sonata_LF", "2019", "2019-05-13", "국산차", "LPG", 1997, "30000", "중형", 5, 0, 1000.0, 50, 80, "판금 / 1인 신조 차량", d2.getId()},
                    {"Hyundai", "Sonata_LF", "2021", "2021-08-09", "국산차", "LPG", 1996, "25000", "중형", 5, 0, 1000.0, 50, 80, "단순 교체 / 짧은 키로수", d2.getId()},
                    {"Infiniti", "Q50", "2019", "2019-05-13", "외제차", "경유", 1997, "30000", "중형", 5, 0, 1000.0, 30, 50, "판금 / 1인 신조 차량", d3.getId()},
                    {"Infiniti", "Q50", "2021", "2021-08-09", "외제차", "경유", 1996, "25000", "중형", 5, 0, 1000.0, 30, 50, "단순 교체 / 짧은 키로수", d3.getId()},
                    {"Kia", "Morning_JA", "2019", "2019-05-13", "국산차", "LPG", 1997, "30000", "경차", 5, 0, 1000.0, 0, 30, "판금 / 1인 신조 차량", d4.getId()},
                    {"Kia", "Morning_JA", "2021", "2021-08-09", "국산차", "LPG", 1996, "25000", "경차", 5, 0, 1000.0, 0, 30, "단순 교체 / 짧은 키로수", d4.getId()},
                    {"Kia", "K7", "2019", "2019-05-13", "국산차", "휘발유", 1997, "30000", "준대형", 5, 1000, 2000.0, 80, 100, "판금 / 1인 신조 차량", d5.getId()},
                    {"Kia", "K7", "2021", "2021-08-09", "국산차", "휘발유", 1996, "25000", "준대형", 5, 1000, 2000.0, 80, 100, "단순 교체 / 짧은 키로수", d5.getId()},
                    {"Kia", "Niro", "2019", "2019-05-13", "국산차", "친환경(전기, 수소)", 1997, "30000", "준중형", 5, 1000, 2000.0, 0, 30, "판금 / 1인 신조 차량", d1.getId()},
                    {"Kia", "Niro", "2021", "2021-08-09", "국산차", "친환경(전기, 수소)", 1996, "25000", "준중형", 5, 1000, 2000.0, 0, 30, "단순 교체 / 짧은 키로수", d1.getId()},
                    {"Kia", "The_New_Carnival", "2019", "2019-05-13", "국산차", "경유", 1997, "30000", "대형", 9, 1000, 2000.0, 50, 80, "판금 / 1인 신조 차량", d2.getId()},
                    {"Kia", "The_New_Carnival", "2021", "2021-08-09", "국산차", "경유", 1996, "25000", "대형", 9, 1000, 2000.0, 50, 80, "단순 교체 / 짧은 키로수", d2.getId()},
                    {"Kia", "The_New_Lay", "2019", "2019-05-13", "국산차", "휘발유", 1997, "30000", "경차", 4, 1000, 2000.0, 50, 80, "판금 / 1인 신조 차량", d3.getId()},
                    {"Kia", "The_New_Lay", "2021", "2021-08-09", "국산차", "휘발유", 1996, "25000", "경차", 4, 1000, 2000.0, 50, 80, "단순 교체 / 짧은 키로수", d3.getId()},
                    {"MINI", "Cooper_5-Door", "2019", "2019-05-13", "외제차", "휘발유", 1997, "30000", "소형", 5, 2000, 2000.0, 30, 50, "판금 / 1인 신조 차량", d4.getId()},
                    {"MINI", "Cooper_5-Door", "2021", "2021-08-09", "외제차", "휘발유", 1996, "25000", "소형", 5, 2000, 2000.0, 30, 50, "단순 교체 / 짧은 키로수", d4.getId()},
                    {"Kia", "K7_Premier", "2019", "2019-05-13", "국산차", "휘발유", 1997, "30000", "준대형", 5, 2000, 3000.0, 50, 80, "판금 / 1인 신조 차량", d5.getId()},
                    {"Kia", "K7_Premier", "2021", "2021-08-09", "국산차", "휘발유", 1996, "25000", "준대형", 5, 2000, 3000.0, 50, 80, "단순 교체 / 짧은 키로수", d5.getId()},
                    {"Hyundai", "Palisade", "2019", "2019-05-13", "국산차", "경유", 1997, "30000", "대형", 7, 2000, 3000.0, 80, 100, "판금 / 1인 신조 차량", d1.getId()},
                    {"Hyundai", "Palisade", "2021", "2021-08-09", "국산차", "경유", 1996, "25000", "대형", 7, 2000, 3000.0, 80, 100, "단순 교체 / 짧은 키로수", d1.getId()},
                    {"Mercedes-Benz", "GLS", "2019", "2019-05-13", "외제차", "경유", 1997, "30000", "대형", 7, 4000, 5000.0, 50, 80, "판금 / 1인 신조 차량", d2.getId()},
                    {"Mercedes-Benz", "GLS", "2021", "2021-08-09", "외제차", "경유", 1996, "25000", "대형", 7, 4000, 5000.0, 50, 80, "단순 교체 / 짧은 키로수", d2.getId()},
                    {"Kia", "The_New_K9", "2019", "2019-05-13", "국산차", "휘발유", 1997, "30000", "대형", 5, 4000, 5000.0, 50, 80, "판금 / 1인 신조 차량", d3.getId()},
                    {"Kia", "The_New_K9", "2021", "2021-08-09", "국산차", "휘발유", 1996, "25000", "대형", 5, 4000, 5000.0, 50, 80, "단순 교체 / 짧은 키로수", d3.getId()},
                    {"Land_Rover", "Range_Rover_Velar", "2019", "2019-05-13", "외제차", "경유", 1997, "30000", "준대형", 5, 4000, 5000.0, 30, 50, "판금 / 1인 신조 차량", d4.getId()},
                    {"Land_Rover", "Range_Rover_Velar", "2021", "2021-08-09", "외제차", "경유", 1996, "25000", "준대형", 5, 4000, 5000.0, 30, 50, "단순 교체 / 짧은 키로수", d4.getId()},
                    {"Genesis", "Genesis_G80", "2019", "2019-05-13", "국산차", "휘발유", 1997, "30000", "준대형", 5, 5000, 6000.0, 50, 80, "판금 / 1인 신조 차량", d5.getId()},
                    {"Genesis", "Genesis_G80", "2021", "2021-08-09", "국산차", "휘발유", 1996, "25000", "준대형", 5, 5000, 6000.0, 50, 80, "단순 교체 / 짧은 키로수", d5.getId()},
                    {"Maserati", "Levante", "2019", "2019-05-13", "외제차", "휘발유", 1997, "30000", "준대형", 5, 5000, 6000.0, 150, null, "판금 / 1인 신조 차량", d2.getId()},
                    {"Maserati", "Levante", "2021", "2021-08-09", "외제차", "휘발유", 1996, "25000", "준대형", 5, 5000, 6000.0, 150, null, "단순 교체 / 짧은 키로수", d2.getId()},
                    {"Ford", "Bronco_U725", "2019", "2019-05-13", "외제차", "휘발유", 1997, "30000", "대형", 5, 5000, 6000.0, 80, 100, "판금 / 1인 신조 차량", d3.getId()},
                    {"Ford", "Bronco_U725", "2021", "2021-08-09", "외제차", "휘발유", 1996, "25000", "대형", 5, 5000, 6000.0, 80, 100, "단순 교체 / 짧은 키로수", d3.getId()},
                    {"Genesis", "Genesis_GV70", "2019", "2019-05-13", "국산차", "휘발유", 1997, "30000", "준중형", 5, 7000, 6000.0, 50, 80, "판금 / 1인 신조 차량", d5.getId()},
                    {"Genesis", "Genesis_GV70", "2021", "2021-08-09", "국산차", "휘발유", 1996, "25000", "준중형", 5, 7000, 6000.0, 50, 80, "단순 교체 / 짧은 키로수", d5.getId()},
                    {"BMW", "New_5_Series_G60", "2019", "2019-05-13", "외제차", "친환경(전기, 수소)", 1997, "30000", "준중형", 5, 7000, 8000.0, 30, 50, "판금 / 1인 신조 차량", d1.getId()},
                    {"BMW", "New_5_Series_G60", "2021", "2021-08-09", "외제차", "친환경(전기, 수소)", 1996, "25000", "준중형", 5, 7000, 8000.0, 30, 50, "단순 교체 / 짧은 키로수", d1.getId()},
                    {"Genesis", "Genesis_GV80_Coupe", "2019", "2019-05-13", "국산차", "휘발유", 1997, "30000", "준대형", 5, 7000, 8000.0, 80, 100, "판금 / 1인 신조 차량", d5.getId()},
                    {"Genesis", "Genesis_GV80_Coupe", "2021", "2021-08-09", "국산차", "휘발유", 1996, "25000", "준대형", 5, 7000, 8000.0, 80, 100, "단순 교체 / 짧은 키로수", d5.getId()},
                    {"Mercedes-Benz", "EQS_V297", "2019", "2019-05-13", "외제차", "친환경(전기, 수소)", 1997, "30000", "대형", 5, 7000, 8000.0, 50, 80, "판금 / 1인 신조 차량", d4.getId()},
                    {"Mercedes-Benz", "EQS_V297", "2021", "2021-08-09", "외제차", "친환경(전기, 수소)", 1996, "25000", "대형", 5, 7000, 8000.0, 50, 80, "단순 교체 / 짧은 키로수", d4.getId()},
                    {"BMW", "X5_G05", "2019", "2019-05-13", "외제차", "친환경(전기, 수소)", 1997, "30000", "대형", 5, 8000, 9000.0, 50, 80, "판금 / 1인 신조 차량", d1.getId()},
                    {"BMW", "X5_G05", "2021", "2021-08-09", "외제차", "친환경(전기, 수소)", 1996, "25000", "대형", 5, 8000, 9000.0, 50, 80, "단순 교체 / 짧은 키로수", d1.getId()},
                    {"Genesis", "Genesis_G90_R34", "2019", "2019-05-13", "국산차", "휘발유", 1997, "30000", "대형", 5, 8000, 9000.0, 50, 80, "판금 / 1인 신조 차량", d5.getId()},
                    {"Genesis", "Genesis_G90_R34", "2021", "2021-08-09", "국산차", "휘발유", 1996, "25000", "대형", 5, 8000, 9000.0, 50, 80, "단순 교체 / 짧은 키로수", d3.getId()},
                    {"Tesla", "Model_X", "2019", "2019-05-13", "외제차", "친환경(전기, 수소)", 1997, "30000", "대형", 5, 8000, 9000.0, 50, 80, "판금 / 1인 신조 차량", d1.getId()},
                    {"Tesla", "Model_X", "2021", "2021-08-09", "외제차", "친환경(전기, 수소)", 1996, "25000", "대형", 5, 8000, 9000.0, 50, 80, "단순 교체 / 짧은 키로수", d1.getId()},
                    {"Hyundai", "i30_PD", "2019", "2019-05-13", "국산차", "휘발유", 1997, "30000", "준중형", 5, 9000, 10000.0, 30, 50, "판금 / 1인 신조 차량", d1.getId()},
                    {"Hyundai", "i30_PD", "2021", "2021-08-09", "국산차", "휘발유", 1996, "25000", "준중형", 5, 9000, 10000.0, 30, 50, "단순 교체 / 짧은 키로수", d1.getId()},
                    {"Hyundai", "Santa_Fe", "2019", "2019-05-13", "국산차", "경유", 1997, "30000", "중형", 5, 9000, 10000.0, 0, 30, "판금 / 1인 신조 차량", d1.getId()},
                    {"Hyundai", "Santa_Fe", "2021", "2021-08-09", "국산차", "경유", 1996, "25000", "중형", 5, 9000, 10000.0, 0, 30, "단순 교체 / 짧은 키로수", d1.getId()},
                    {"Audi", "e-tron_GT", "2019", "2019-05-13", "외제차", "친환경(전기, 수소)", 1997, "30000", "대형", 5, 9000, 10000.0, 50, 80, "판금 / 1인 신조 차량", d2.getId()},
                    {"Audi", "e-tron_GT", "2021", "2021-08-09", "외제차", "친환경(전기, 수소)", 1996, "25000", "대형", 5, 9000, 10000.0, 50, 80, "단순 교체 / 짧은 키로수", d2.getId()},
                    {"Mercedes-Benz", "S-Class_W223", "2019", "2019-05-13", "외제차", "경유", 1997, "30000", "대형", 5, 10000, null, 0, 30, "판금 / 1인 신조 차량", d4.getId()},
                    {"Mercedes-Benz", "S-Class_W223", "2021", "2021-08-09", "외제차", "경유", 1996, "25000", "대형", 5, 10000, null, 0, 30, "단순 교체 / 짧은 키로수", d4.getId()},
                    {"BMW", "M4_Coupe_G82", "2019", "2019-05-13", "외제차", "휘발유", 1997, "30000", "중형", 4, 10000, null, 80, 100, "판금 / 1인 신조 차량", d3.getId()},
                    {"BMW", "M4_Coupe_G82", "2021", "2021-08-09", "외제차", "휘발유", 1996, "25000", "중형", 4, 10000, null, 80, 100, "단순 교체 / 짧은 키로수", d3.getId()},
                    {"Renault_Korea", "SM6", "2019", "2019-05-13", "국산차", "경유", 1997, "30000", "중형", 5, 10000, null, 0, 30, "판금 / 1인 신조 차량", d5.getId()},
                    {"Renault_Korea", "SM6", "2021", "2021-08-09", "국산차", "경유", 1996, "25000", "중형", 5, 10000, null, 0, 30, "단순 교체 / 짧은 키로수", d5.getId()}
            };

            // DB에 차량 데이터 저장
            for (Object[] row : carData) {
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
                        .maintenanceCostMin(parseIntSafe(row[12]))
                        .maintenanceCostMax(parseIntSafe(row[13]))
                        .specialNote((String) row[14])
                        .dealer(dealerMap.get((Long) row[15]))
                        .build());
            }
        }
    }
}
