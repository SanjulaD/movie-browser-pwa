import React, { Component } from 'react'
import MovieCard from '../MovieCard/MovieCard';
import Axios from 'axios';

import queryString from 'query-string';

class MovieList extends Component {
    
    state = { movies: [] }

    componentDidMount() {
        this.fetchMovies();
    }

    fetchMovies = () => {
        let q = queryString.parse(this.props.location.search);
        Axios.get(`{cannot provide the API Key}`) 
            .then(res => res.data)
            .then(data => data.Search)
            .then(movies => this.setState({movies}))
    }
    render() {
        return (
            <div className="row">{ 
                    this.state.movies.map(
                        m => <MovieCard movie={m} key={m.imdbID}/>
                    )
                }
            </div>
        );
    }
}

export default MovieList;