import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from '../NavLinks/Home';
import About from '../NavLinks/About';
import Showcase from '../NavLinks/ShowcaseNav';

export default class Routes extends Component {
    render() {
        
        return(
            <Fragment>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/showcase" component={Showcase} />
            </Fragment>
        )
    }
}
