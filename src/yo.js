import React, { Component } from 'react';
import './css/main.css';
import { connect } from "redux-zero/react";
import gladys from './images/gladys.png';
import { Row, Grid, Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Aboutme from './aboutme';
import Nav from './nav';

const Yo = () => {
  return (
    <div className="one-page  parallax ">
      <div className="row">
        <div className="prueba2">
          <div className="yo-div" md={12}>
            <h1 className="titulo-nombre p-nombre">GLADYS YOVANA  <br />MAMANI CAMATICONA</h1>
            <h4 className="ifilhola p-nombre">Front-end developer junior</h4>
          
          </div>
        </div>
      </div>
    </div>
  );
}
export default Yo;