import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Filmes from "../pages/Filmes";
import React from "react";
import Header from "../components/Header";
import Erro from "../pages/Erro";
import Favorites from "../pages/Favorites";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filmes/:id" element={<Filmes />} />
                <Route path="/favorites" element={<Favorites />} />

                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;
