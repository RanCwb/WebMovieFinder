import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link className="logo" to="/">
                Find Movies
            </Link>
            <Link className="favoritos" to="/favorites">
                My Movies
            </Link>
        </header>
    );
}
