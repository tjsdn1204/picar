import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import SurveyController from "./pages/SurveyController.tsx";
import Home from "./pages/AiRecommendationLoading.tsx"; // 임시
import Result from "./pages/AiRecommendationResult.tsx" // 임시
import SurveyComplete from "./pages/SurveyComplete.tsx";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SurveyController />}/>
          <Route path="/survey" element={<SurveyController />}/>
          <Route path="/result" element={<Result />}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
