import React, { Component } from 'react';
import { Button, Fade } from 'reactstrap';
import Calculator from '../../Calculator/Calculator';
import PropTypes from 'prop-types'

export default class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: true };
        this.toggle = this.toggle.bind(this);
    }

    render() {
        return (
            <div className="showcaseButtons">
                <Button color="primary" onClick={this.toggle}>Calculator</Button>
                <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                    <Calculator />
                </Fade>
                {/* <div className="Example">
                    <Button color="primary" onClick={this.toggle}>Example</Button>
                    <Fade in={this.state.fadeIn} tag="h5" className="">
                        
                    </Fade>
                </div> */}
            </div>
        );
    }

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
};

Fade.propTypes = {
    // Controls if the fade is currently showing or not (default: true)
    in: PropTypes.false,
    mountOnEnter: PropTypes.false,
};