import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import gladys from './images/gladys.png';
import { Row, Grid, Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Yo from './yo';
import './css/main.css';
import Aboutme from './aboutme';
import Habilidades from './habilidades';
import Contactme from './contactme';
import Portafolio from './portafo';

const Nav = () => {
  return (
      <Row className="show-grid">
        <nav className='y-web-nav'>
          <Col xs={10} md={10}>
            <nav class="navbar navbar-default">
              <div class="container-fluid">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav">
                    <li>
                      <NavLink className="navlii" to="/yo"><p>INICIO</p></NavLink>
                    </li>
                    <li>
                      <NavLink className="navli" to="/aboutme"><p>Acerca de mi</p></NavLink>
                    </li>
                    <li>
                      <NavLink className="navli" to="/habilidades"><p>Habilidades</p></NavLink></li>
                    <li>
                      <NavLink className="navli" to="/portafolio"><p>Portafolio</p></NavLink></li>
                    <li>
                      <NavLink className="navli" to="/contactme"><p>Contactame</p></NavLink>
                    </li>
                    <li>
                      <a href="https://drive.google.com/open?id=1GMKRv921bzZj7pCdnQKEYf4B8VWNhznl" target="_blank"><p>Descarga mi CV</p></a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </Col>
        </nav>
      </Row >
  );
}
export default Nav;