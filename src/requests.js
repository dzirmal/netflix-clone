const API_KEY = 'a610b3408a30df39636baec91324f3cc';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomancedMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  // The below url is fo images
  baseImagesUrl: `https://image.tmdb.org/t/p/original/`,
};

export default requests;
