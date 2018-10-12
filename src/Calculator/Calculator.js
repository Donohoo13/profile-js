import React, { Component } from 'react';
import Button from './Button'
import Input from './Input'
import { ClearButton } from './ClearButton';
import './CSS/Calculator.css';
import * as math from 'mathjs';


class Calculator extends Component {
    constructor(props) {
    super(props);

    this.state = {
        input: ""
    };
    }

    // updateInput = (val) => {
    //     this.setState({input: this.state.input + val});
    // }

    // handleEqual = () => {
    //     this.setState({input: math.eval(this.state.input) });
    // }

    updateInput = (val) => {
        if (val === 'X') {
            val = "*";  
            } 
            if (isNaN(val) && isNaN(this.state.input[this.state.input.length-1])){
         this.setState({input: this.state.input}); 
            }
            else {
         this.setState({input: this.state.input + val});
         }
        }
        handleEqual = () => {
            if (isNaN(this.state.input[this.state.input.length-1])) {
         this.setState({input: this.state.input});     
         }
            else {
         this.setState({input: math.eval(this.state.input)});
         }
        }
    
  render() {
    return (
      <div className="Calculator">
        <div className="calc-wrapper">
            <Input input={this.state.input}></Input>
        <div className="row">
            <Button handleClick={this.updateInput}>7</Button>
            <Button handleClick={this.updateInput}>8</Button>
            <Button handleClick={this.updateInput}>9</Button>
            <Button handleClick={this.updateInput}>/</Button>
        </div>
        <div className="row">
            <Button handleClick={this.updateInput}>4</Button>
            <Button handleClick={this.updateInput}>5</Button>
            <Button handleClick={this.updateInput}>6</Button>
            <Button handleClick={this.updateInput}>X</Button>
        </div>
        <div className="row">
            <Button handleClick={this.updateInput}>1</Button>
            <Button handleClick={this.updateInput}>2</Button>
            <Button handleClick={this.updateInput}>3</Button>
            <Button handleClick={this.updateInput}>+</Button>
        </div>
        <div className="row">
            <Button handleClick={this.updateInput}>.</Button>
            <Button handleClick={this.updateInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.updateInput}>-</Button>
        </div>
        <div className="row">
            <ClearButton handleClear={() => this.setState({input: ""})}>Clear</ClearButton>
        </div>
        </div>
      </div>
    );
  }
}

export default Calculator;