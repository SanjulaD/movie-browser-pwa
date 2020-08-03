import React from 'react'
import queryString from 'query-string';
import { Table } from 'reactstrap';

import Axios from 'axios';

class MovieDetails extends React.Component {
    state = { movies: [] }

    componentDidMount() {
        this.fetchMovies();
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.location !== this.prevProps) {
            this.fetchMovies();
        }
    }

    fetchMovies = () => {
        let q = queryString.parse(this.props.location.search);
        Axios.get(`http://www.omdbapi.com/?apikey=3b9ebd01&i=${q.imdbId}`)
            .then(res => res.data)
            .then(movies => this.setState({ movies }))
    }

    render() {
        let { movies } = this.state;
        return (
            <div className="row">
                <div className="col-md-4">
                    <img src={movies.Poster} alt={movies.Title} />
                </div>
                <div className="col-md-8">
                    <h1 style={{ fontSize: "28px" }}>{movies.Title}</h1>
                    <br />
                    <Table>
                        <tbody>
                            <tr>
                                <th scope="row">Director</th>
                                <td>{movies.Director}</td>
                            </tr>
                            <tr>
                                <th scope="row">Plot</th>
                                <td>{movies.Plot}</td>
                            </tr>
                            <tr>
                                <th scope="row">Year</th>
                                <td>{movies.Year}</td>
                            </tr>
                            <tr>
                                <th scope="row">Language</th>
                                <td>{movies.Language}</td>
                            </tr>
                            <tr>
                                <th scope="row">Writer</th>
                                <td>{movies.Writer}</td>
                            </tr>
                            <tr>
                                <th scope="row">Awards</th>
                                <td>{movies.Awards}</td>
                            </tr>
                            <tr>
                                <th scope="row">Genre</th>
                                <td>{movies.Genre}</td>
                            </tr>
                            <tr>
                                <th scope="row">Actors</th>
                                <td>{movies.Actors}</td>
                            </tr>
                            <tr>
                                <th scope="row">Box Office</th>
                                <td>{movies.BoxOffice}</td>
                            </tr>
                            <tr>
                                <th scope="row">Released</th>
                                <td>{movies.Released}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default MovieDetails;