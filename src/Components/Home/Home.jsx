import React from 'react';

import './Home.style.css';

const Home = () => 
    <div className="container">
        <div className="row">
            <div className="col-md-3 col-xs-12 "></div>
            <div className="col-md-6 col-xs-12 text-center">
                <img src='images/displayPic.jpg' alt="displayPic" className="img img-thumbnail"/>
                <h3 className="movieHeader">Movie Browser App</h3>
                <p>Powered By ReactJs 16.13.0</p>
            </div>
            <div className="col-md-3 col-xs-12"></div>
        </div>
    </div>
    

export default Home;