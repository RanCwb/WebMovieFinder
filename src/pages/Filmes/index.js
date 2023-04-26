import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./filmes.css";
import { toast } from "react-toastify";

function Filmes() {
    const [mov, setMov] = useState({});
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadMovie() {
            await api
                .get(`/movie/${id}`, {
                    params: {
                        api_key: "e80679d1abb9f49e7779d1a4aab4a511",
                    },
                })
                .then((response) => {
                    setMov(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    navigate("/", { replace: true });
                    return;
                });
        }

        loadMovie();

        return () => {
            console.log("desmontou");
        };
    }, [id.navigate]);

    function save() {
        let myList = localStorage.getItem("@movies");

        let savedMovies = JSON.parse(myList) || [];

        const gotMovie = savedMovies.some(
            (saveMovie) => saveMovie.id === mov.id
        );

        if (gotMovie) {
            toast.warn("you have this film in your favorites.");
            return;
        }

        savedMovies.push(mov);
        localStorage.setItem("@movies", JSON.stringify(savedMovies));
        toast.success("Movie Saved");
    }

    if (loading) {
        return (
            <div className="load">
                <h1>Loading.....</h1>a
            </div>
        );
    }

    return (
        <div className="movie-info">
            <h1>{mov.title}</h1>
            <img
                className="img"
                src={`https://image.tmdb.org/t/p/original${mov.backdrop_path} `}
                alt={mov.title}
            />
            <h3>Sinopse</h3>
            <span>{mov.overview}</span>
            <strong>Score:{mov.vote_average / 1} </strong>

            <div className="action-area">
                <button onClick={save}>Save</button>
                <button>
                    <a
                        target="blank"
                        rel="external"
                        href={`https://www.youtube.com/results?search_query=${mov.title}`}
                    >
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Filmes;
