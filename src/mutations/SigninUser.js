import Relay from 'react-relay'

export default class SigninUser extends Relay.Mutation {
	//When signing in, you need to specify an idToken, and you'll be providing the 
	//mutation with that idToken information.

	getVariables() {
		return {
			auth0: {
				idToken: this.props.idToken
			}
		}
	}

	getMutation () {
		return Relay.QL`mutation{signinUser}`
	}
	
	getFatQuery () {
		return Relay.QL`
			fragment on SigninPayload {
				viewer
			}
		`
	}

	getConfigs() {
		return [
			{
				type: 'REQUIRED_CHILDREN',
				children: [
					Relay.QL`
						fragment on SigninPayload {
							viewer {
								user {
									id
								}
							}
						}
					`
				]
			}
		]
	}

}
