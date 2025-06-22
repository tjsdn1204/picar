# <div align = "center"> <img src = "https://github.com/user-attachments/assets/2a8c30e8-386d-4ae2-bbe4-429802fdd838" width="150px"/>  </div>

<div align = "center" >
    <h3> 차량 선택부터 딜러 매칭까지, 당신 맞춤 Pick! </h3> 
</div>
<br>

🚗 중고 차량 거래 중개 서비스 <br>
🦁 한양대학교 ERICA 멋쟁이사자처럼 13기 3팀 우리끼리 해커톤 프로젝트

## 1. 프로젝트 개요
🔺 Picar는 사용자의 라이프스타일과 운전 성향을 반영한 설문 데이터를 기반으로, 맞춤형 차량을 추천해주는 **AI 기반 차량 추천 서비스**입니다. <br/>
🔺 자동차 시장에 어두운 사람이라도 쉽게 이해할 수 있으며, 동시에 신뢰할 수 있는 중고차 선택을 도와드립니다!
<br />

## 2. 기술 스택

| 기술 스택 | 사용한 항목 |
|----------|------------|
| **💻Frontend** | [![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)  [![React Router](https://img.shields.io/badge/React--Router-D92B2B?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/) |
| **🔧Backend** | [![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)  [![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/) ![RESTful API](https://img.shields.io/badge/RESTFul%20API-4B8BBE?style=for-the-badge&logo=cloudflare&logoColor=white) [![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://www.postman.com/) |
| **🤖External API** | [![GPT API](https://img.shields.io/badge/OpenAI%20GPT-412991?style=for-the-badge&logo=openai&logoColor=white)](https://platform.openai.com/) |
| **🤝Collaboration** | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)  [![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)](https://www.notion.so/) |
## 3. 주요 기능 
📌 **차량 및 딜러 상세 정보 제공** - 차량 사진, 제원, 이력, 딜러 등을 한눈에 확인할 수 있는 페이지 제공 <br>
📌 **라이프 스타일 기반 AI 추천** - OpenAI API를 활용하여 사용자 라이프스타일 질문을 통한 맞춤형 차량 추천 제공 <br>
<br />

## 4. 프로젝트 구조 및 실행 방법
### 프로젝트 구조
```
Picar/
├── back/                 # Spring Boot 백엔드
│   ├── src/
│   └── build.gradle
├── front/                # React 프론트엔드
│   ├── public/
│   └── src/
├── README.md 
```
### 실행 방법
💻FrontEnd 
```
cd front 
npm install
npm start run // http://localhost:3000 에서 서비스
```
🔧BackEnd 
```
cd back
./gradlew bootRun // http:/localhost:8080 에서 서비스
```



## 5. 서비스 기능 및 화면

![Image](https://github.com/user-attachments/assets/8931453f-4a5f-47e9-ae84-7bbc89080911)
<br>

| 화면       | 설명                        |
|------------|-----------------------------|
| **홈 화면**       | 검증된 딜러를 확인, 차량 검색, AI 추천 화면 이동을 할 수 있습니다. |
| **AI 설문 조사 화면**       | 사용자 라이프스타일(가구 형태, 주행 거리 등)에 맞춘 간단한 질문에 응답합니다.| 
| **AI 추천 결과 화면**       | 설문 데이터를 기반으로 AI가 적절한 차량들을 추천하며, 간단한 정보를 보여줍니다. |
| **차량 보유 딜러 화면**       | 차량을 보유 중인 딜러 목록을 보여주며, 차량별 가격과 간단한 정보를 보여줍니다. |
| **차량 상세 화면**       | 차량의 세부 스펙, 사진, 사고 이력 등을 확인할 수 있습니다. |
| **딜러 상세 화면**       | 딜러의 신뢰 점수, 보유 차량, 위치 정보 등도 한눈에 확인할 수 있습니다. |

## 6. 팀원 소개 및 역할 분담
| 파트  | 이름            |             주요 역할 내용                          |
|----------|------------------|--------------------------------------------------|
| PM/Design   | 마범석 | 서비스 기획 및 UX/UI 디자인 총괄        |
| FE   | 이선우           | 홈, 딜러 상세, 차량 보유 딜러 화면 제작          |
| FE   | 김태훈    | 설문 조사, AI 추천 결과, 차량 상세 화면 제작   |
| BE   | 임진수    | openAI api연동 및 기능 구현, ERD 모델링, 전체적인 RESTful API 아키텍처 설계      |
| BE   | 국채원    | DB구축 및 JPA 연동, 이미지 자동 매핑 설정, ERD 모델링        |

