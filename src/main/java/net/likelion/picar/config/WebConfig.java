package net.likelion.picar.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Paths;

@Configuration
public class WebConfig implements WebMvcConfigurer {

//    @Override
//    public void addResourceHandlers(ResourceHandlerRegistry registry) {
//        // 프로젝트 내 images 폴더를 정적 리소스로 매핑
//        String imagePath = Paths.get("images").toAbsolutePath().toUri().toString();
//
//        registry.addResourceHandler("/images/**")
//                .addResourceLocations(imagePath);
//    }
}
