import {BrowserRouter, Routes, Route} from "react-router-dom"
import SurveyController from "../Survey/container/SurveyController.tsx";
import Home from "../AiRecommendation/pages/AiRecommendationLoading.tsx"; // 임시
import Result from "../pages/AiRecommendationResult.tsx" // 임시
import SurveyComplete from "../SurveyComplete/pages/SurveyComplete.tsx";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SurveyController />}/>
            <Route path="/survey" element={<SurveyController />}/>
            <Route path="/result" element={<Result />}/> 
        </Routes>
    </BrowserRouter>
  );
}

export default Router;
