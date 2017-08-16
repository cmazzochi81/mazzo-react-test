import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../containers/Template'
import Home from '../containers/Home'
import About from '../containers/About'
import Relay from 'react-relay'

const ViewerQueries = {
	//In this ViewerQueries object, you're ensuring each of your routes has 
	//access to an object called 'viewer', which will correspond to 
	//the query of 'viewer' in your Relay API. 
	viewer: () => Relay.QL`query{viewer}`
}

const createRoutes = () => {

	return (
			<Route
				path ='/'
				component={Template}
				//Passing the ViewerQueries to each of your routes
				queries={ViewerQueries}
			>

				<IndexRoute
					component={Home}
					queries={ViewerQueries}
				/>

				<Route 
					path={'/about'}
					component={About}
					queries={ViewerQueries}
				/>	

			</Route>	
	)
}

const Routes = createRoutes()

export default Routes