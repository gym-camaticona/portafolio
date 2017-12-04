import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'redux-zero/react';
import { Row } from 'react-bootstrap';
import { Switch, Route, NavLink, Redirect, BrowserRouter } from 'react-router-dom'
import Aboutme from './aboutme';
import Mas from './mas';
import Habilidades from './habilidades';
import Portafo from './portafo';
import Contactme from './contactme';

const Index = () => {
return(
	<div>
		<BrowserRouter>
				<Switch>
					<Route exact path='/' component={App} />
					{/* <Route path='/home' component={App} /> */}
                    <Route path='/aboutme' component={Aboutme} />
					<Route path='/mas' component={Mas} />
					<Route path='/habilidades' component={Habilidades} />
					<Route path='/portafo' component={Portafo} />
					<Route path='/contactme' component={Contactme} />
					{/* <Route component={App} /> */}
				</Switch>
		</BrowserRouter>
		</div>
)
}
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();

