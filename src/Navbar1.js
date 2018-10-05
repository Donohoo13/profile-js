import React, {Component} from 'react'
import Routes from './Routes';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {

     return(
         <div>
        <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/About">About</Link>
        </li>
    </ul>
    <hr />
            <Routes/>
            </div>
     )
    }
}

export default Navbar