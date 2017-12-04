import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import './css/main.css';
import { Form, Grid, Row, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import Nav from './nav';


const Idimest = () => {

    return (
        <div>
            <Grid>
                <Row className="show-grid">
                    <Col md={5}>
                        <Nav />
                    </Col>
                    <Col md={7}>
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
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>

    )
}
export default Idimest;