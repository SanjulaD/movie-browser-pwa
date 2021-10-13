import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MovieList from './Components/Movie/MovieList/MovieList';

import { BrowserRouter, Route } from 'react-router-dom';
import MovieDetails from './Components/Movie/MovieDetails/MovieDetails';

const App = () => {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="container">
            <Route exact path="/" component={ Home } />
            <Route path="/movies" component={ MovieList } />
            <Route path="/movieDetails" component={MovieDetails} />
          </div>
        </div>
      </BrowserRouter>
    );
}

export default App;
