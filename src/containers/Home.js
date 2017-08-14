import React, {Component} from 'react'
import {Stage} from 'react-konva'
import {Board} from '../styled/Home'

class Home extends Component {

	state = {
		rows:3
	}

	componentWillMount(){
		let height = window.innerHeight
		let width = window.innerWidth
		let size = (height < width) ? height * .8 : width * .8
		let rows = this.state.rows
		let unit = size / rows

		this.setState({
			size,
			rows,
			unit
		})
		
	}

	render(){
		let{
			size,
			unit,
			rows
		} = this.state


		return(
				<div>
					<h2>Home</h2>
					<Stage
						width={size}
						height={size}
					>

						<Board
							unit={unit}
							rows={rows}
							size={size}
						/>
						
						{/*<Squares/>*/}

					</Stage>

				</div>
			)
	}
}
export default Home