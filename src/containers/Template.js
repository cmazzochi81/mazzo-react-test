import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
//import CircularProgress from 'material-ui/CircularProgress'
import NavDrawer from '../components/NavDrawer.js'
import {Header, Main} from '../styled/Template'

injectTapEventPlugin()

class Template extends Component {

	render(){

		return(
			<MuiThemeProvider>
				<div>
					<NavDrawer/>
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

export default Template