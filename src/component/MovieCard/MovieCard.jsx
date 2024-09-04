
import { Link } from 'react-router-dom'
import './MovieCard.css'
export default function MovieCard({ movie }) {
  return (
    <>
       <div className="movie-card" style={{ backgroundImage: `url(${movie.posterURL})` }}>
       <Link to={`/movies/${movie.id}`}>
       <p id='rate'>Rating: {movie.rating}</p>
       <div className="text">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
   
</div>
</Link>
    </div>
    </>
  )
}
