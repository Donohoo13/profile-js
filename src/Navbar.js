import React, {Component} from 'react'
import Routes from './Routes';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import Home from "./Home";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


// NavbarBrand.propTypes = {
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//   // pass in custom element to use
// }

export default class NavbarHome extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    const HomeNav = <Link to="/">Home</Link>
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto"><a href="/">Conner Donohoo</a></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
              <NavLink>{HomeNav}</NavLink>
              </NavItem>
              <NavItem>
                <Link to="/about">About</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Routes/>
      </div>
    );
  }
}

// NavbarToggler.propTypes = {
//   type: PropTypes.string,
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//   // pass in custom element to use
// }

//  class Navbar extends Component {
//     render() {
//       return(
//          <div>
//         <ul>
//         <li>
//             <Link to="/">Home</Link>
//         </li>
//         <li>
//             <Link to="/About">About</Link>
//         </li>
//     </ul>
//     <hr />
//             <Routes/>
//             </div>
//      )
//     }
// }
//  export default Navbar