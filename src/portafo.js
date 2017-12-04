
import React, { Component } from 'react';
import './css/main.css';

import { connect } from "redux-zero/react";
import gladys from './images/gladys.png';
import { Row, Grid, Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button, ProgressBar } from 'react-bootstrap';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Aboutme from './aboutme';
import Nav from './nav';
import reactt from './images/p-1.png';
import javascript from './images/p-2.png';
import css from './images/p-3.png';
import html from './images/htmll.png';
import bootstrap from './images/bootstrapp.png';
import slack from './images/slack.png';
import github from './images/github.png';

const Portafolio = () => {
  return (
    <div className="four-page parallax4" align="center">
      <Row>
        <h2 className="title">PORTAFOLIO</h2>
      </Row>
      <Row className="show-grid-portafolio">
        <Col md={6}>
          <div className="imgportafolio1">
            <div className="mask">
            <i class="fa fa-eye fa-3x" aria-hidden="true"></i>     
            <i class="fa fa-github fa-3x" aria-hidden="true"></i>
              </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="imgportafolio2">
            <div className="mask">
            <i class="fa fa-eye fa-3x" aria-hidden="true"></i>  
            <i class="fa fa-github fa-3x" aria-hidden="true"></i>
              </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="imgportafolio3">
            <div className="mask">
            <i class="fa fa-eye fa-3x" aria-hidden="true"></i>   
            <i class="fa fa-github fa-3x" aria-hidden="true"></i>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="imgportafolio3">
            <div className="mask">
            <i class="fa fa-eye fa-3x " aria-hidden="true"></i>  
            <i class="fa fa-github fa-3x" aria-hidden="true"></i>
              </div>
          </div>
        </Col>
        <Nav />
      </Row>
    <Nav />
    </div >
  );
}
export default Portafolio;