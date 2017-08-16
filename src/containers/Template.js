import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
//import CircularProgress from 'material-ui/CircularProgress'
import NavDrawer from '../components/NavDrawer.js'
import {Header, Main} from '../styled/Template'
import Relay from 'react-relay'

injectTapEventPlugin()

class Template extends Component {

	render(){

		return(
			<MuiThemeProvider>
				<div>
					<NavDrawer
					auth={this.props.route.auth}
					authenticated={this.props.viewer.user}
					/>
					<Header>
					Mazzo' Best Yet
					</Header>
					<Main>
					{this.props.children}
					</Main>

				</div>
			</MuiThemeProvider>

			)
	}

}

//export default Template --commented out so as to create a Relay container.
//Regarding the syntax below using lowercase 'user', it is an object that is provided by 
//GraphQL.  GraphQL is configured to give you back yourself, or the viewer who is currently 
//using the site. So when you specify 'id', the Relay container is actually going to be 
//provided with the user who is currently working with the site and their own id. It will be 
//helpful, when you want to sign Mutations that this user is going to do, acting as 
//themselves.  If there is no one signed in, then the user id will return as null. 
	export default Relay.createContainer(
		Template, {
			fragments: {
				viewer: () => Relay.QL`
					fragment on Viewer{
						user{
							id
						}
					}

				`,
			}
		}

	)