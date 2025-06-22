package net.likelion.picar.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class DealerResponseDto {
    private Long id;
    private String name;
    private String affiliation;
    private String position;
    private String imagePath;
}
