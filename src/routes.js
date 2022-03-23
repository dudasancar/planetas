import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Planetas from "./pages/Planetas";
import ExplorePlanets from "./pages/ExplorePlanets";
import AddPlanet from "./pages/AddPlanet";

function RoutesPlanetas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/planetas" element={<Planetas />} />
        <Route path="/explorarPlaneta" element={<ExplorePlanets />} />
        <Route path="/adicionarPlaneta" element={<AddPlanet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPlanetas;
