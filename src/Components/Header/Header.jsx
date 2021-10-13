import React, { Component } from 'react';
import { withRouter , Link } from 'react-router-dom';

class Header extends Component {
    
    submitHandler = (event) => {
        event.preventDefault();
        let { history } = this.props;
        history.push('/movies?searchText='+this.refs.searchTf.value);
        console.log('this is:',this)
    }

    render() {
        return (
            <div className="alert alert-warning">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Link to='/' style={{ textDecoration: 'none' }}><h3>Movie Browser</h3></Link>
                        </div>
                        <div className="col-md-3">
                            <Link to='/' style={{ textDecoration: 'none' }}><h3>Home</h3></Link>
                        </div>
                        <div className="col-md-3">
                            <Link to='/' style={{ textDecoration: 'none' }}><h3>Browse Here</h3></Link>
                        </div>
                        <div className="col-md-3">
                            <form onSubmit={this.submitHandler}>
                                <input
                                    ref="searchTf"
                                    type="search"
                                    className="form-control"
                                    placeholder="Search Movie"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);