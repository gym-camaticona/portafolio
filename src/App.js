import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import gladys from './images/gladys.png';
import './css/main.css';
import { Row, Grid, Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Aboutme from './aboutme';
import Nav from './nav';
import Yo from './yo';
import Contactme from './contactme';
import Habilidades from './habilidades';
import Portafolio from './portafo';

const App = () => {
  return (
    <div className="body">
      <div className="one parallax"> 
        <Yo />
      </div>
      <div className="two parallax"> 
      <Aboutme />
       </div>
      <div className="three parallax" > 
      <Habilidades />
      </div>
      <div className="four parallax" > 
      <Portafolio />
      </div>
      <div className="five parallax"> 
      < Contactme />
      </div>
      
    </div >
  );
}
export default App;
