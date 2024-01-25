import React from "react";
import Home from "./pages/Home";
import { Route, Routes, HashRouter } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
