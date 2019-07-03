import './App.css';
import axios from 'axios';

class Popular extends Component {
    render() {
        return (
            <div>
                <h2> {movies.title}</h2>
                <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="Movie Poster" />
                <p>{movie.overview}</p>

            </div>
        )
    }
}```
