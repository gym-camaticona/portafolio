import React, { Component } from 'react';
import './css/main.css';

import { connect } from "redux-zero/react";
import gladys from './images/blanco.jpg';
import { Row, Grid, Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button, Glyphicon } from 'react-bootstrap';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Aboutme from './aboutme';
import Nav from './nav';


const Contactme = () => {
    return (
        <div className="five-page parallax1" align="center">
            <Row>
                <h2 className="title">CONTACTAME</h2>
            </Row>
            <Row className="show-grid show-grid-contactame ">
                <Col md={6}>
                    <Form horizontal className="form">
                        <FormGroup controlId="formHorizontalEmail">
                            <Col sm={2}>
                            </Col>
                            <Col sm={8}>
                                <FormControl className="form-contactame" type="email" placeholder="Email" />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                            <Col sm={2}>
                            </Col>
                            <Col sm={8}>
                                <FormControl className="form-contactame" type="text"
                                    componentClass="textarea" placeholder="Mensaje" />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col sm={12}>
                                <Button className="mass" type="submit">
                                    <p>ENVIAR</p>
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>

                <Col className="icon-contact" md={6}>
                    <Col className="icon" xs={6} md={5}>
                        <a className="cont-icon " href="/https://www.linkedin.com/feed/">
                            <i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
                        </a>
                        <p className="red">linkedin.com<br /><br /></p>
                    </Col>
                    <Col className="icon" xs={6} md={5}>
                        <a className="cont-icon " href="https://github.com/GLADYSYOVANAMAMANICAMATICONA">
                            <i class="fa fa-github fa-3x" aria-hidden="true"></i>
                        </a>
                        <p className="red">github.com<br /><br /></p>
                    </Col>
                    <Col className="icon" xs={6} md={5}>
                        <NavLink className="cont-icon " to="/aboutme">
                            <i class="fa fa-envelope fa-3x" aria-hidden="true"></i>
                        </NavLink>
                        <p className="red">gymcamaticona<br />@gmail.com</p>
                    </Col>
                    <Col className="icon" xs={6} md={5}>
                        <NavLink className="cont-icon " to="/aboutme">
                            <i class="fa fa-mobile fa-3x" aria-hidden="true"></i>
                        </NavLink>
                        <p className="red">958297890<br /><br /></p>
                    </Col>
                    <Col sm={2}>
                    </Col>
                    <Nav />

                </Col>
            </Row>

            <Nav />

        </div>
    );
}
export default Contactme;