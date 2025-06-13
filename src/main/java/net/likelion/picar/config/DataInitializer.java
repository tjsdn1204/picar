package net.likelion.picar.config;

import lombok.RequiredArgsConstructor;
import net.likelion.picar.domain.Car;
import net.likelion.picar.repository.CarRepository;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements ApplicationRunner {

    private final CarRepository carRepository;

    @Override
    public void run(ApplicationArguments args) {
        if (carRepository.count() == 0) {
            carRepository.save(Car.builder().model("AVANTE_AD").origin("Domestic").fuelType("Gasoline").size("Small_Midsize").seatingCapacity(5).priceMin(0).priceMax(10000000).maintenanceCostMin(2000000).maintenanceCostMax(2500000).build());
            carRepository.save(Car.builder().model("Sonata_LF").origin("Domestic").fuelType("LPG").size("Standard_Midsize").seatingCapacity(5).priceMin(0).priceMax(10000000).maintenanceCostMin(2000000).maintenanceCostMax(2500000).build());
            carRepository.save(Car.builder().model("Q50").origin("Imported").fuelType("Diesel").size("Standard_Midsize").seatingCapacity(5).priceMin(0).priceMax(10000000).maintenanceCostMin(1500000).maintenanceCostMax(2000000).build());
            carRepository.save(Car.builder().model("Morning_JA").origin("Domestic").fuelType("LPG").size("Mini").seatingCapacity(5).priceMin(0).priceMax(10000000).maintenanceCostMin(1000000).maintenanceCostMax(1500000).build());
            carRepository.save(Car.builder().model("K7").origin("Domestic").fuelType("Gasoline").size("Large").seatingCapacity(5).priceMin(10000000).priceMax(20000000).maintenanceCostMin(3000000).maintenanceCostMax(4000000).build());
            carRepository.save(Car.builder().model("Niro").origin("Domestic").fuelType("Electric").size("Small_Midsize").seatingCapacity(5).priceMin(10000000).priceMax(20000000).maintenanceCostMin(1000000).maintenanceCostMax(1500000).build());
            carRepository.save(Car.builder().model("The_New_Carnival").origin("Domestic").fuelType("Diesel").size("Full-size").seatingCapacity(9).priceMin(10000000).priceMax(20000000).maintenanceCostMin(2500000).maintenanceCostMax(3000000).build());
            carRepository.save(Car.builder().model("The_New_Lay").origin("Domestic").fuelType("Gasoline").size("Mini").seatingCapacity(4).priceMin(10000000).priceMax(20000000).maintenanceCostMin(2000000).maintenanceCostMax(2500000).build());
            carRepository.save(Car.builder().model("Cooper_5-Door").origin("Imported").fuelType("Gasoline").size("Compact").seatingCapacity(5).priceMin(20000000).priceMax(20000000).maintenanceCostMin(1000000).maintenanceCostMax(1500000).build());
            carRepository.save(Car.builder().model("K7_Premier").origin("Domestic").fuelType("Gasoline").size("Large").seatingCapacity(5).priceMin(20000000).priceMax(30000000).maintenanceCostMin(2500000).maintenanceCostMax(3000000).build());
            carRepository.save(Car.builder().model("Palisade").origin("Domestic").fuelType("Diesel").size("Full-size").seatingCapacity(7).priceMin(20000000).priceMax(30000000).maintenanceCostMin(3000000).maintenanceCostMax(4000000).build());
            carRepository.save(Car.builder().model("GLS").origin("Imported").fuelType("Diesel").size("Full-size").seatingCapacity(7).priceMin(40000000).priceMax(50000000).maintenanceCostMin(2500000).maintenanceCostMax(3000000).build());
            carRepository.save(Car.builder().model("The_New_K9").origin("Domestic").fuelType("Gasoline").size("Full-size").seatingCapacity(5).priceMin(40000000).priceMax(50000000).maintenanceCostMin(2000000).maintenanceCostMax(2500000).build());
            carRepository.save(Car.builder().model("Range_Rover_Velar").origin("Imported").fuelType("Diesel").size("Large").seatingCapacity(5).priceMin(40000000).priceMax(50000000).maintenanceCostMin(1500000).maintenanceCostMax(2000000).build());
            carRepository.save(Car.builder().model("Genesis_G80").origin("Domestic").fuelType("Gasoline").size("Large").seatingCapacity(5).priceMin(50000000).priceMax(60000000).maintenanceCostMin(2000000).maintenanceCostMax(2500000).build());
            carRepository.save(Car.builder().model("Levante").origin("Imported").fuelType("Gasoline").size("Large").seatingCapacity(5).priceMin(50000000).priceMax(60000000).maintenanceCostMin(5000000).maintenanceCostMax(null).build());
            carRepository.save(Car.builder().model("Bronco_U725").origin("Imported").fuelType("Gasoline").size("Full-size").seatingCapacity(5).priceMin(50000000).priceMax(60000000).maintenanceCostMin(3000000).maintenanceCostMax(4000000).build());
            carRepository.save(Car.builder().model("Genesis_GV70").origin("Domestic").fuelType("Gasoline").size("Standard_Midsize").seatingCapacity(5).priceMin(50000000).priceMax(60000000).maintenanceCostMin(2500000).maintenanceCostMax(3000000).build());
            carRepository.save(Car.builder().model("New_5_Series_G60").origin("Imported").fuelType("Electric").size("Standard_Midsize").seatingCapacity(5).priceMin(70000000).priceMax(80000000).maintenanceCostMin(1500000).maintenanceCostMax(2000000).build());
            carRepository.save(Car.builder().model("Genesis_GV80_Coupe").origin("Domestic").fuelType("Gasoline").size("Large").seatingCapacity(5).priceMin(70000000).priceMax(80000000).maintenanceCostMin(3000000).maintenanceCostMax(4000000).build());
            carRepository.save(Car.builder().model("EQS_V297").origin("Imported").fuelType("Electric").size("Full-size").seatingCapacity(5).priceMin(70000000).priceMax(80000000).maintenanceCostMin(2500000).maintenanceCostMax(3000000).build());
            carRepository.save(Car.builder().model("X5_G05").origin("Imported").fuelType("Electric").size("Full-size").seatingCapacity(5).priceMin(80000000).priceMax(90000000).maintenanceCostMin(2500000).maintenanceCostMax(3000000).build());
            carRepository.save(Car.builder().model("Genesis_G90_R34").origin("Domestic").fuelType("Gasoline").size("Full-size").seatingCapacity(5).priceMin(80000000).priceMax(90000000).maintenanceCostMin(2000000).maintenanceCostMax(2500000).build());
            carRepository.save(Car.builder().model("Model_X").origin("Imported").fuelType("Electric").size("Full-size").seatingCapacity(5).priceMin(80000000).priceMax(90000000).maintenanceCostMin(2500000).maintenanceCostMax(3000000).build());
            carRepository.save(Car.builder().model("i30_PD").origin("Domestic").fuelType("Gasoline").size("Small_Midsize").seatingCapacity(5).priceMin(90000000).priceMax(100000000).maintenanceCostMin(1500000).maintenanceCostMax(2000000).build());
            carRepository.save(Car.builder().model("Santa_Fe").origin("Domestic").fuelType("Diesel").size("Standard_Midsize").seatingCapacity(5).priceMin(90000000).priceMax(100000000).maintenanceCostMin(1000000).maintenanceCostMax(1500000).build());
            carRepository.save(Car.builder().model("e-tron_GT").origin("Imported").fuelType("Electric").size("Full-size").seatingCapacity(5).priceMin(90000000).priceMax(100000000).maintenanceCostMin(2000000).maintenanceCostMax(2500000).build());
            carRepository.save(Car.builder().model("S-Class_W223").origin("Imported").fuelType("Diesel").size("Full-size").seatingCapacity(5).priceMin(100000000).priceMax(null).maintenanceCostMin(1000000).maintenanceCostMax(1500000).build());
            carRepository.save(Car.builder().model("M4_Coupe_G82").origin("Imported").fuelType("Gasoline").size("Small_Midsize").seatingCapacity(4).priceMin(100000000).priceMax(null).maintenanceCostMin(3000000).maintenanceCostMax(4000000).build());
            carRepository.save(Car.builder().model("SM6").origin("Domestic").fuelType("Diesel").size("Small_Midsize").seatingCapacity(5).priceMin(100000000).priceMax(null).maintenanceCostMin(1000000).maintenanceCostMax(1500000).build());
        }
    }
}
