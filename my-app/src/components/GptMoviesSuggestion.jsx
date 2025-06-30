import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

export const GptMoviesSuggestion = () => {
  const aiMovies = useSelector((store) => store.gpt.aiMovies);
  console.log(aiMovies,"ai Movies from redux");

  if(!aiMovies) return;

  return (
  <div className='flex'>
    <div className='flex gap-4'>
      {aiMovies.map(movie => <MovieCard title={movie.title} posterPath={backdrop_path}/>)}
    </div>
  </div>
  )
}
