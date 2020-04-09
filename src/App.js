import React, { Component, Fragment } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import './App.css';

import { Nav, Presentation, Documentation } from './components';

class App extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					<header>
						<Nav />
						<Switch>
							<Route exact path='/' component={Presentation} />
							<Route
								path='/documentation'
								component={Documentation}
							/>
							<Redirect to='/' />
						</Switch>
					</header>
				</Fragment>
			</Router>
		);
	}
}

export default App;
