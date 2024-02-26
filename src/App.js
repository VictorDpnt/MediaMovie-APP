import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Films from "./pages/Films";
import Series from "./pages/Series";
import Nouveautes from "./pages/Nouveautes";
import Acceuil from "./pages/Acceuil";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/films" element={<Films />} />
          <Route path="/series" element={<Series />} />
          <Route path="/nouveautes" element={<Nouveautes />} />
          <Route path="*" element={<Acceuil />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
