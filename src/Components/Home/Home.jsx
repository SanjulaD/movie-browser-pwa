import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Home.style.css';

const Home = () =>
    <div className="container">
        <div className="row" style={{marginTop: "100px"}}>
            <div className="col-md-4 col-xs-12 text-center">
                <img src='https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg' alt="displayPic" className="img img-thumbnail" />
                <h3 className="movieHeader">Movie Browser App</h3>
                <p>Powered By ReactJs 16.13.0</p>
                <Link to='/movies'>
                    <Button className="movie-class" color="warning">See Movie</Button>
                </Link>
            </div>
            <div className="col-md-4 col-xs-12 text-center">
                <img src='https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg' alt="displayPic" className="img img-thumbnail" />
                <h3 className="movieHeader">Movie Browser App</h3>
                <p>Powered By ReactJs 16.13.0</p>
                <Link to='/movies'>
                    <Button className="movie-class" color="warning">See Movie</Button>
                </Link>
            </div>
            <div className="col-md-4 col-xs-12 text-center">
                <img src='https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg' alt="displayPic" className="img img-thumbnail" />
                <h3 className="movieHeader">Movie Browser App</h3>
                <p>Powered By ReactJs 16.13.0</p>
                <Link to='/movies'>
                    <Button className="movie-class" color="warning">See Movie</Button>
                </Link>
            </div>
        </div>
    </div>


export default Home;