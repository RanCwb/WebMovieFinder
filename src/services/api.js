import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

//url https://api.themoviedb.org/3/movie/now_playing?api_key=e80679d1abb9f49e7779d1a4aab4a511&LANGUAGE=pt-BR
//base https://api.themoviedb.org/3/

export default api;
