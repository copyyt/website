import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home";
import PrivacyPolicy from "./pages/privacy-policy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
