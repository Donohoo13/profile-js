import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Showcase from './Showcase';

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
