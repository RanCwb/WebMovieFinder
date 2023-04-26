import Reac, { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function findMovie() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "e80679d1abb9f49e7779d1a4aab4a511",
                },
                page: 1,
                language: "pt-BR",
            });

            setMovie(response.data.results.slice(0, 10));
            setLoading(false);
        }

        findMovie();
    }, []);

    if (loading) {
        return (
            <div className="load">
                <h2>LOADING...</h2>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="s-container">
                {movie.map((item) => {
                    return (
                        <article key={item.id}>
                            <strong>{item.title}</strong>
                            <img
                                className="img"
                                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                            />

                            <p>{item.overview}</p>
                            <Link
                                className="linkName"
                                to={`/Filmes/${item.id}`}
                            >
                                Acessar
                            </Link>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
