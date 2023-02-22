import "./App.css";

import Home from "./components/pages/Home/Home";
import List from "./components/pages/List/List";
import Hotel from "./components/pages/Hotel/Hotel";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel" element={<List />} />
        <Route path="/hotel/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
