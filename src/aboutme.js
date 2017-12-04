import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import './css/main.css';
import { Form, Grid, Row, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Nav from './nav';
import Mas from './mas';
import gladys from './images/yo.JPG';


const Fort = () => {

    return (
        <div className="two-page parallax2 " align="center">
            <div className="contenido-aboutme">
                <div>
                    <h2 className="title title-aboutme">ACERCA DE MI</h2>
                </div>
                <Row className="show-grid-acerca">
                    <Col  md={6}>
                        <Col md={4}>
                        </Col>
                        <Col className="imggladys" xs={12} md={8}>
                            <img className='img-responsive y-logo logo-gladys' src={gladys} />
                        </Col>
                    </Col>
                    <Col className="yotexto" md={6}>
                        <Col className="imggladys" xs={12} md={7}>
                            <p>¡HOLA!<br />
                                Mi nombre es Gladys, soy desarrolladora front-end developer junior. Me considero una persona comprometida, paciente, leal a  equipos de trabajo y con muchas
                            ganas de aprender. Amante de las actividades al aire libre.
                         </p>
                            <p>Me agrada el trabajo en equipo porque es indiscutible que los resultados son mejores.</p>
                            {/* <NavLink to="/contactme"><Button className=" mas" ><p>Mas</p></Button></NavLink> */}
                        </Col>
                        <Col md={5}>
                        </Col>
                    </Col>
                </Row>
                <Nav />
            </div>
        </div>
    )
}
export default Fort;