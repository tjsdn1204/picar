import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Dealer_Carousel from './components/Dealer_Carousel.tsx';
import Survey from "./pages/Survey.tsx";

const App = () => {
  return (
    <div className="App">
      <Survey />
      <BrowserRouter>
        <Routes>
          <Route />
          <Route />
          <Route /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
