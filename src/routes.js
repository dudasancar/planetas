import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Planetas from "./pages/Planetas";
import ExplorePlanets from "./pages/ExplorePlanets";

function RoutesPlanetas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/planetas" element={<Planetas />} />
        <Route path="/explorarPlaneta" element={<ExplorePlanets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPlanetas;
