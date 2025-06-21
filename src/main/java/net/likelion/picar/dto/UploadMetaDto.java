package net.likelion.picar.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UploadMetaDto {
    private String targetType;  // "car" 또는 "dealer"
    private Long targetId;      // carId 또는 dealerId
    private String fileName;    // "avante_ad.jpg"
    private String imagePath;   // "/images/cars/avante_ad.jpg"
}
