package net.likelion.picar.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 차량 이미지 경로 매핑
        registry.addResourceHandler("/images/Uploads_Cars/**")
                .addResourceLocations("file:///C:/ProgramData/MySQL/MySQL Server 8.0/Uploads_Cars/");

        // 딜러 이미지 경로 매핑
        registry.addResourceHandler("/images/Uploads_Dealers/**")
                .addResourceLocations("file:///C:/ProgramData/MySQL/MySQL Server 8.0/Uploads_Dealers/");
    }
}