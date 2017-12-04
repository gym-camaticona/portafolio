import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import './css/main.css';
import { Form, Grid, Row, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Nav from './nav';
import Fort from './aboutme';


const Mas = () => {

    return (
        <div>
            <Grid>
                <Row className="show-grid">
                    <Col md={4}>
                        <Nav />
                    </Col>
                    <Col md={8}>
                        <Row className="aboutt">
                            <Col className="masfiv" md={4}>
                                <h3 className="m">Fortalezas</h3>
                                <p className="m">Leal</p>
                                <p className="m">Perseverante</p>
                                <p className="m">Alegre</p>
                                <p className="m">Paciente</p>
                                <p className="m">Empática</p>
                                <p className="m">Serena</p>
                            </Col>
                            <Col className="masfiv" md={4}>
                                <h3>Intereses</h3>
                                <p>Campamentos</p>
                                <p>Natación</p>
                                <p>Viajar</p>
                                <p>Fotografía</p>
                                <p>Cocina</p>
                                <p>Tejer</p>
                            </Col>
                        </Row>
                        <Row className="aboutt">
                            <Col md={4}>

                            </Col>
                            <Col md={4}>
                                <h3>Voluntariado</h3>
                                <p>Club de Conquistadores</p>
                                <p>Escuela Cristiana de Vacaciones</p>
                            </Col>
                        </Row>
                        {/* <Col md={2}> */}
                        {/* <h3>Hackatones - Conferencias</h3>
                                <p>Perú #SinAnemia</p>
                                <p>Latin American Woman In Technology</p>
                            </Col>
                            <Col md={2}>

                                <h3>IDIOMAS</h3>
                                <div>INGLES<br />
                                    Intermedio
                        </div>
                                <div>AYMARA<br />
                                    Intermedio
                        </div>
                                <h3>ESTUDIOS</h3>
                                <div>LABORATORIA<br />
                                    Frontend developer Jr.
                        </div>
                                <div>IESTP FRANCIS DE PAULA GONZALES VIGIL<br />
                                    Computación e Informática
                        </div> */}
                        {/* </Col> */}
                        {/* </Row> */}

                    </Col>

                </Row>
            </Grid>
        </div >

    )
}
export default Mas;