const API_KEY = "38ba47932f17b3f830084d20c25767b2";

const requests = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&page=5&with_genres=35`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`, 
    fetchHistoricalMovies: `/discover/movie?api_key=${API_KEY}&page=5&with_genres=36`, 
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&page=7&with_genres=10749`, 
    fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&page=5&with_genres=18`,
    fetchScienceMovies: `/discover/movie?api_key=${API_KEY}&page=4&with_genres=878`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&page=2&with_genres=99`,
}
export default requests;

// https://api.themoviedb.org/3/trending/all/week?api_key=${57aae2206da7dc6e06f17197a51211ba}&language=en-IN