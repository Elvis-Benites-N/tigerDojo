import React from "react";
import Home from "./pages/Home";
import Swap from "./pages/Swap";
import { Route, Routes, HashRouter } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/swap" element={<Swap />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;