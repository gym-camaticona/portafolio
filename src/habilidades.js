import React, { Component } from 'react';
import './css/main.css';

import { connect } from "redux-zero/react";
import gladys from './images/gladys.png';
import { Row, Grid, Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button, ProgressBar } from 'react-bootstrap';
import { BrowserRouter, HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Aboutme from './aboutme';
import Nav from './nav';

const Habilidades = () => {
	return (
		<div className="three-page parallax3" align="center">
			<Row>
				<h2 className="title">HABILIDADES</h2>
			</Row>
			<Row className="show-grid-habilidades">
				<Col className="" md={12}>
					<Col md={1}>
					</Col>
					<Col className="habilidadesicon" xs={6} md={2}>
						<p className="p-habilidades">HTML5</p>
						<div className="grid">
							<figure className="effect-layla">
								<i class="devicon-html5-plain"></i>
							</figure>
						</div>
					</Col>
					<Col className="habilidadesicon" xs={6} md={2}>
						<p className="p-habilidades">CSS</p>
						<div className="grid">
							<figure className="effect-layla">
								<i class="devicon-css3-plain"></i>
							</figure>
						</div>
					</Col>
					<Col className="habilidadesicon" xs={6} md={2}>
						<p className="p-habilidades">JAVASCRIPT</p>
						<div className="grid">
							<figure className="effect-layla">
								<NavLink to="/habilidades-in">
									<i class="devicon-javascript-plain"></i>
								</NavLink>
							</figure>
						</div>
					</Col>
					<Col className="habilidadesicon" xs={6} md={2}>
						<p className="p-habilidades">REACT</p>
						<div className="grid">
							<figure className="effect-layla">
								<NavLink to="/habilidades-in">
									<i className="devicon-react-original"></i>
								</NavLink>
							</figure>
						</div>
					</Col>
					<Col className="habilidadesicon" xs={6} md={2}>
						<p className="p-habilidades">JQUERY</p>
						<div className="grid">
							<figure className="effect-layla">
								<NavLink to="/habilidades-in">
									<i class="devicon-jquery-plain"></i>
								</NavLink>
							</figure>
						</div>
					</Col>
				</Col>
				<Col className="" md={12}>
					<Col md={1}>
					</Col>
					<Col className="habilidadesicon"xs={6} md={2}>
						<p className="p-habilidades">BOOTSTRAP</p>
						<div className="grid">
							<figure className="effect-layla">
								<NavLink to="/habilidades-in">
									<i class="devicon-bootstrap-plain"></i>
								</NavLink>
							</figure>
						</div>
					</Col>
					<Col className="habilidadesicon" xs={6} md={2}>
						<p className="p-habilidades" >GITHUB</p>
						<div className="grid">
							<figure className="effect-layla">
								<NavLink to="/habilidades-in">
									<i class="devicon-github-plain"></i>
								</NavLink>
							</figure>
						</div>
					</Col>
					<Col className="habilidadesicon" xs={6} md={2}>
						<p className="p-habilidades">SLACK</p>
						<div className="grid">
							<figure className="effect-layla">
								<i class="devicon-slack-plain"></i>
								<figcaption>
								</figcaption>
							</figure>
						</div>
					</Col>
					<Col className="habilidadesicon" xs={6} md={2}>
						<p className="p-habilidades">SASS</p>
						<div className="grid">
							<figure className="effect-layla">
								<i class="devicon-sass-original"></i>
							</figure>
						</div>
					</Col>
					<Col className="habilidadesicon" xs={6} md={2}>
						<p className="p-habilidades">SASS</p>

						<div className="grid">
							<figure className="effect-layla">
								<i class="devicon-visualstudio-plain"></i>
							</figure>
						</div>
					</Col>
				</Col>
			</Row>
			<Nav />
		</div>
	);
}
export default Habilidades;
