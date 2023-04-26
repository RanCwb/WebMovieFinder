import React from "react";
import { Link } from "react-router-dom";
import "./erro.css";
export default function Erro() {
    return (
        <div className="notF">
            <h1>404...</h1>
            <h2>Not Pages Found</h2>

            <Link to="/"> Check New Movies.</Link>
        </div>
    );
}
