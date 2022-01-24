import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_BASE_API_URL;

const API_KEY = process.env.REACT_APP_API_KEY;

const requestToken = () => {
  return axios.get(
    `${API_BASE_URL}authentication/token/new?api_key=${API_KEY}`
  );
};

const login = (credentials) => {
  return axios.post(
    `${API_BASE_URL}authentication/token/validate_with_login?api_key=${API_KEY}`,
    credentials
  );
};

const getPopularMovies = () => {
  return axios.get(`${API_BASE_URL}trending/all/day?api_key=${API_KEY}`);
};

const searchMovies = (query) => {
  return axios.get(
    `${API_BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
  );
};

const getMovieDetail = (movieId) => {
  return axios.get(`${API_BASE_URL}movie/${movieId}?api_key=${API_KEY}`);
};

export { requestToken, login, getPopularMovies, searchMovies, getMovieDetail };
