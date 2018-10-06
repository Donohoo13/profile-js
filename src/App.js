import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Navbar from './Navbar';

const App = () => (
  <Router>
    <div>
      <Navbar/>
    </div>
  </Router>
);

export default App;
