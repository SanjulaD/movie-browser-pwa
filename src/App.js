import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MovieList from './Components/Movie/MovieList/MovieList';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="container">
            <Route exact path="/" component={ Home } />
            <Route path="/movies" component={ MovieList } />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
