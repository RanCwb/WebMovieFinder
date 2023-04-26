import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./fav.css";
import { toast } from "react-toastify";

function Favorites() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const list = localStorage.getItem("@movies");
        setMovies(JSON.parse(list) || []);
    }, []);

    function delet(id) {
        let filterMvoies = movies.filter((item) => {
            return item.id !== id;
        });

        setMovies(filterMvoies);

        localStorage.setItem("@movies", JSON.stringify(filterMvoies));
        toast.warn("Movie Deleted");
    }

    return (
        <div className="my-movies">
            <h1>My Movie List</h1>

            {movies.length === 0 && (
                <span>You dont have any saved movie ;C</span>
            )}

            <ul>
                {movies.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/Filmes/${item.id}`}>
                                    Check Details
                                </Link>
                                <button onClick={() => delet(item.id)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Favorites;
