import axios from 'axios';

const API_KEY = '14bbbaf17264a85a2229a09d03b6c904';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending//movie/day?api_key=${API_KEY}`
  );
  return response;
  
};

export const getSearchMovies = async ({ query = '', page = 1 }) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&page=${page}&include_adult=true&query=${query}&language=en-US`
  );
  return response;
};

export const getMoviesDetails = async ({ id }) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response;
};

export const getMovieCredits = async ({ id }) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response;
};

export const getMovieReviews = async ({ id }) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response;
};
