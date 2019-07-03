import React from 'react';
import './App.css';
import Popular from './popular';
import axios from 'axios';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props)
  {
    super(props)
    const show = "";
    this.state = {
      movies: []
    } 

    // hey, go grab all of the stuff from that webpage
    axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b6fbc7f3f313bd395902af464ef47262")
      .then((response) => {console.log(response.data)
        // handle success
        this.setState({movies: response.data.results}); // this is our movies
      })
    console.log('right after that axios get stuff!')
    // then put it into this.state.movies
  }
  getPopular(){
    this.state.movies.map((movie) => {
      return (
        <div>
        <Popular
        title={movie.title}
        rating={movie.vote_average}
        poster={movie.poster_path}
        desc={movie.overview}
        />
        </div>
      )
    }
    )
  
  }
  render() {
    console.log('Render function!', this.state.movies);
    var test = this.getPopular();
    return (
      
      <div className="App" value ={test}>
        <h1>{test}</h1>
        swad
      </div>
    )
  }
}
//ReactDOM.render(<App/>, document.getElementById('app'))
        

        //   <div>
        //     <h1>{movie.title}</h1>
        //     <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="Movie Poster" />
        //     <p>{movie.overview}</p>
        //   </div>
        //   )
        // })}
     
   

export default App;
