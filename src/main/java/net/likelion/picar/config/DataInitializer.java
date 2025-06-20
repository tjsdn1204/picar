package net.likelion.picar.config;

import lombok.RequiredArgsConstructor;
import net.likelion.picar.domain.Car;
import net.likelion.picar.domain.Dealer;
import net.likelion.picar.repository.CarRepository;
import net.likelion.picar.repository.DealerRepository;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
@RequiredArgsConstructor
public class DataInitializer implements ApplicationRunner {

    private final CarRepository carRepository;
    private final DealerRepository dealerRepository;

    @Override
    public void run(ApplicationArguments args) {
        if (dealerRepository.count() == 0 && carRepository.count() == 0) {
            // 딜러 저장
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

            // 차량 데이터 저장
            Object[][] carData = {
                    {"Hyundai", "AVANTE_AD", "Domestic", "Gasoline", "Small_Midsize", 5, 0, 10000000, 2000000, 2500000, d1.getId()},
                    {"Hyundai", "Sonata_LF", "Domestic", "LPG", "Standard_Midsize", 5, 0, 10000000, 2000000, 2500000, d1.getId()},
                    {"Infiniti", "Q50", "Imported", "Diesel", "Standard_Midsize", 5, 0, 10000000, 1500000, 2000000, d1.getId()},
                    {"Kia", "Morning_JA", "Domestic", "LPG", "Mini", 5, 0, 10000000, 1000000, 1500000, d2.getId()},
                    {"Kia", "K7", "Domestic", "Gasoline", "Large", 5, 10000000, 20000000, 3000000, 4000000, d2.getId()},
                    {"Kia", "Niro", "Domestic", "Electric", "Small_Midsize", 5, 10000000, 20000000, 1000000, 1500000, d2.getId()},
                    {"Kia", "The_New_Carnival", "Domestic", "Diesel", "Full-size", 9, 10000000, 20000000, 2500000, 3000000, d2.getId()},
                    {"Kia", "The_New_Lay", "Domestic", "Gasoline", "Mini", 4, 10000000, 20000000, 2000000, 2500000, d2.getId()},
                    {"MINI", "Cooper_5-Door", "Imported", "Gasoline", "Compact", 5, 20000000, 20000000, 1000000, 1500000, d4.getId()},
                    {"Kia", "K7_Premier", "Domestic", "Gasoline", "Large", 5, 20000000, 30000000, 2500000, 3000000, d2.getId()},
                    {"Hyundai", "Palisade", "Domestic", "Diesel", "Full-size", 7, 20000000, 30000000, 3000000, 4000000, d1.getId()},
                    {"Mercedes-Benz", "GLS", "Imported", "Diesel", "Full-size", 7, 40000000, 50000000, 2500000, 3000000, d5.getId()},
                    {"Kia", "The_New_K9", "Domestic", "Gasoline", "Full-size", 5, 40000000, 50000000, 2000000, 2500000, d2.getId()},
                    {"Land_Rover", "Range_Rover_Velar", "Imported", "Diesel", "Large", 5, 40000000, 50000000, 1500000, 2000000, d4.getId()},
                    {"Genesis", "Genesis_G80", "Domestic", "Gasoline", "Large", 5, 50000000, 60000000, 2000000, 2500000, d3.getId()},
                    {"Maserati", "Levante", "Imported", "Gasoline", "Large", 5, 50000000, 60000000, 5000000, 6000000, d5.getId()},
                    {"Ford", "Bronco_U725", "Imported", "Gasoline", "Full-size", 5, 50000000, 60000000, 3000000, 4000000, d2.getId()},
                    {"Genesis", "Genesis_GV70", "Domestic", "Gasoline", "Standard_Midsize", 5, 50000000, 60000000, 2500000, 3000000, d3.getId()},
                    {"BMW", "New_5_Series_G60", "Imported", "Electric", "Standard_Midsize", 5, 70000000, 80000000, 1500000, 2000000, d4.getId()},
                    {"Genesis", "Genesis_GV80_Coupe", "Domestic", "Gasoline", "Large", 5, 70000000, 80000000, 3000000, 4000000, d3.getId()},
                    {"Mercedes-Benz", "EQS_V297", "Imported", "Electric", "Full-size", 5, 70000000, 80000000, 2500000, 3000000, d5.getId()},
                    {"BMW", "X5_G05", "Imported", "Electric", "Full-size", 5, 80000000, 90000000, 2500000, 3000000, d4.getId()},
                    {"Genesis", "Genesis_G90_R34", "Domestic", "Gasoline", "Full-size", 5, 80000000, 90000000, 2000000, 2500000, d3.getId()},
                    {"Tesla", "Model_X", "Imported", "Electric", "Full-size", 5, 80000000, 90000000, 2500000, 3000000, d1.getId()},
                    {"Hyundai", "i30_PD", "Domestic", "Gasoline", "Small_Midsize", 5, 90000000, 100000000, 1500000, 2000000, d1.getId()},
                    {"Hyundai", "Santa_Fe", "Domestic", "Diesel", "Standard_Midsize", 5, 90000000, 100000000, 1000000, 1500000, d1.getId()},
                    {"Audi", "e-tron_GT", "Imported", "Electric", "Full-size", 5, 90000000, 100000000, 2000000, 2500000, d5.getId()},
                    {"Mercedes-Benz", "S-Class_W223", "Imported", "Diesel", "Full-size", 5, 100000000, 110000000, 1000000, 1500000, d5.getId()},
                    {"BMW", "M4_Coupe_G82", "Imported", "Gasoline", "Small_Midsize", 4, 100000000, 110000000, 3000000, 4000000, d4.getId()},
                    {"Renault_Korea", "SM6", "Domestic", "Diesel", "Small_Midsize", 5, 100000000, 110000000, 1000000, 1500000, d3.getId()}
            };

            for (Object[] row : carData) {
                carRepository.save(Car.builder()
                        .brand((String) row[0])
                        .model((String) row[1])
                        .origin((String) row[2])
                        .fuelType((String) row[3])
                        .size((String) row[4])
                        .seatingCapacity((Integer) row[5])
                        .priceMin((Integer) row[6])
                        .priceMax((Integer) row[7])
                        .maintenanceCostMin((Integer) row[8])
                        .maintenanceCostMax((Integer) row[9])
                        .dealer(dealerMap.get((Long) row[10]))
                        .build());
            }
        }
    }
}
