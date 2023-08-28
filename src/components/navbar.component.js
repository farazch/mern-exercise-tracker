import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component{

    render(){

        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">Create Exercise</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/">Disabled</Link>
                        </li>


                    </ul>
                </div>
            </nav>

        )
    }

}