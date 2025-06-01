import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Dealer_Carousel from './components/Dealer_Carousel.tsx';
import imgLogo from './assets/dealer.png' // dealer img 테스트용 사진

const App = () => {
  return (
    <div className="App">
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
