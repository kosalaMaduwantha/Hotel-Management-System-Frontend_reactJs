import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom"
import HomeTemplate from './ComponentsNethsara/HomeTemplate';

function App() {
  return (
    <div className="App">

      <Router>
        <Route path="/" exact component={HomeTemplate}/>
      </Router>

    </div>
  );
}

export default App;
