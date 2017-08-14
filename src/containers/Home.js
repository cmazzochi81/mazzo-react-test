import React, {Component} from 'react'
import {Stage} from 'react-konva'
import {Board, Squares} from '../styled/Home'

class Home extends Component {

	state = {
		rows:3,
		gameState: new Array(9).fill(false),
		ownMark: 'X',
		otherMark: 'O',
		gameOver: false,
		yourTurn: true,
		winner: false, 
		win: false
	}

	//A component lifecycle function that will execute every time it is mounted to the DOM
	componentWillMount(){
		let height = window.innerHeight
		let width = window.innerWidth
		let size = (height < width) ? height * .8 : width * .8
		let rows = this.state.rows
		let unit = size / rows
		let coordinates = []
		for(let y = 0; y < rows; y++){
			for(let x = 0; x < rows; x++){
				coordinates.push([x*unit, y*unit])
			}
		}

		this.setState({
			size,
			rows,
			unit, 
			coordinates
		})
	}

		move = (marker, index) => {
			console.log('Move made', marker, index)

		}

		makeAiMove = () => {

		}

		turingTest = () => {

		}

		recordGame = () => {

		}	
	

	render(){
		let{
			size,
			unit,
			rows,
			coordinates,
			gameState, 
			win, 
			gameOver,
			yourTurn,
			ownMark
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
						
						<Squares
							unit={unit}
							coordinates={coordinates}
							gameState={gameState}
							win={win}
							gameOver={gameOver}
							yourTurn={yourTurn}
							ownMark={ownMark}
							move={this.move}
						/>

					</Stage>

				</div>
			)
	}
}
export default Home