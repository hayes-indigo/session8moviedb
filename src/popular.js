import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class Popular extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={'https://image.tmdb.org/t/p/w500' + this.props.poster} alt="Movie Poster" />
                <p>{this.props.desc}</p>
            </div>
        )
    }
}
export default Popular
