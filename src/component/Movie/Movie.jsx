import { Link, useParams } from "react-router-dom";
import "./Movie.css";
import data from "../../Movies.json";
export default function Movie() {
  const { id } = useParams();
  const movie = data.find((movie) => movie.id == id);
  return (
    <div>
      <div className="movie-details">
        <img src={movie.posterURL} alt={movie.title} />
        <div className="movie-description">
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>

          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
