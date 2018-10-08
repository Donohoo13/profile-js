import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import NavbarHome from './Navbar';

const App = () => (
  <Router>
    <div>
      <NavbarHome/>
    </div>
  </Router>
);

export default App;
