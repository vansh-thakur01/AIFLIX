export const MAIN_BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_medium.jpg"
export const NETFLIX_IMG = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const ProfilePhoto = "https://pin.it/2HFkT7ppU";
export const NOW_PLAYING_MOVIES_API = "https://api.themoviedb.org/3/movie/now_playing";
export const POPULAR_MOVIES_API = "https://api.themoviedb.org/3/movie/popular";
export const TOP_RATED_MOVIES_API = "https://api.themoviedb.org/3/movie/top_rated";
export const UPCOMING_MOVIES_API = "https://api.themoviedb.org/3/movie/upcoming";
export const OPTIONSOBJ = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_KEY,
  },
};

export const TMDB_IMAGE_CDN = "https://image.tmdb.org/t/p/w500/";
export const TMDB_MOVIE_SEARCH_API = 'https://api.themoviedb.org/3/search/movie'
export const SUPPORTED_LANGUAGES = [
  { identifier: "eng", name: "English" },
  { identifier: "hindi", name: "हिन्दी" },
];