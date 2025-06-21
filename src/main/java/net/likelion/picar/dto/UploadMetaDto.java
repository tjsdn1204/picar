package net.likelion.picar.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UploadMetaDto {
    private Long carId;
    private Long dealerId;
    private String fileName; // 파일 이름 (확장자 포함)
}
