import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactPlayer from "react-player";
import Home from "./Home";
import PaymentSucess from "./PaymentSucess";
// import "~video-react/dist/video-react.css";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paymentsuccess" element={<PaymentSucess />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
