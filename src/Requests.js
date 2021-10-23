// Typically we would store in {process.env.API_KEY}
const API_KEY = 'e1ddcc48be88d5623e1e0966c78bd334';

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_geners=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_geners=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_geners=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_geners=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_geners=99`
};

export default requests;
