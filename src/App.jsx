import React from "react";
import Home from "./pages/Home";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Docs from "./pages/Docs";
import DAO from "./pages/DAO";
import Projects from "./pages/Projects";
import JoinDao from "./pages/JoinDao";
import Bar from "./components/utils/Bar";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Bar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/dao" element={<DAO />}></Route>
          <Route path="/docs" element={<Docs />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/join_the_dao" element={<JoinDao />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
