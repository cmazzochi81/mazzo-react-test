import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import CircularProgress from 'material-ui/CircularProgress'

injectTapEventPlugin()

class Template extends Component {

	render(){

		return(
			<MuiThemeProvider>
				<div>
					<header>
						<h1>Glory Glory Mazzo Genius!</h1>
						<CircularProgress
							onTouchTap={()=>{console.log('check one two buddy')}}
						/>
					</header>

					<main>
					{this.props.children}
					</main>

				</div>
			</MuiThemeProvider>

			)
	}

}

export default Template