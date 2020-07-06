import React, { Component } from 'react'

class Header extends Component {
    state = {  }
    render() {
        return (    
            <div className="alert alert-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h3>Movie Browser</h3>
                        </div>
                        <div className="col-md-4">
                            <input type="search" name="" id="" className="form-control" placeholder="Search Movie"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;