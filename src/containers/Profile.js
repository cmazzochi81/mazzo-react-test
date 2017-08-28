import React, {Component} from 'react'
import {Container, Name, GameListHeader, GameList, GameRecord, Column, ColumnLabels} from '../styled/Profile'
import Relay from 'react-relay'

class Profile extends Component {

	// static defaultProps = {
	// 	user: {
	// 		email: 'USER_EMAIL', 
	// 		games: [

	// 			{
	// 			winner: true,
	// 			createdAt: '12/25/2016', 
	// 			id: '0001'
	// 			}, 
	// 			{
	// 			winner: true,
	// 			createdAt: '12/26/2016', 
	// 			id: '0002'
	// 			},
	// 			{
	// 			winner: true,
	// 			createdAt: '12/27/2016', 
	// 			id: '0003'
	// 			}
	// 		]
	// 	}

	// }

	get records(){
		//return this.props.user.games.map( (game, index) => {
			return this.props.viewer.user.p1games.edges.map( (edge, index) => {
				let {node: game} = edge
			return(
					<GameRecord
						key={index}
						index={index}
					>
					<Column>
						{(game.winner) ? 'Won!' : 'No win.'}
					</Column>

					<Column>
						
						{game.p1Guess}
					</Column>

					<Column>
						
						{(game.p1GuessCorrect) ? 'Yes' : 'Nope'}
					</Column>

					<Column>
						
						{new Date(game.createdAt).toLocaleDateString()}
					</Column>

					</GameRecord>
				)
		})

	}

	render(){
		let {email} = this.props.viewer.user
		//let{email} = this.props.user
		console.log('user', this.props.viewer.user)

		return(
				<Container>
					<Name>
						{email}
					</Name>

					<GameList>
						<GameListHeader>
						My Games
						</GameListHeader>

						<ColumnLabels>
						<Column>
							Outcome
						</Column>
						<Column>
							Guess
						</Column>
						<Column>
							Guessed Correctly
						</Column>
						<Column>
							Date
						</Column>
					</ColumnLabels>

					{this.records}

					</GameList>

					

				</Container>
			)
	}

}

//export default About

export default Relay.createContainer(
		Profile, {
			fragments: {
				viewer: () => Relay.QL`
					fragment on Viewer{
						user{
							id
							email
							p1games (first: 5){
								edges{
									node{
										id
										createdAt
										winner {
											id
										}
										p1Guess
										p1GuessCorrect
									}
								}
							}
						}
					}

				`,
			}
		}

	)