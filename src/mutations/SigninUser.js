import Relay from 'react-relay'

//Creating a new class that is an extention of the Relay Mutation class
export default class SigninUser extends Relay.Mutation{

	//A function available to Mutation and is a place where you specify the inputs 
	//you will provide to the mutation. GraphQL does not require email when signing
	//in and you don't need to specify 'authProvider',  you just need to specify you 
	//are using the auth0 strategy, and then provide a token.  
	getVariables(){
		return{
			auth0: {
				idToken: this.props.idToken
			}
		}
	}
	//A function available to Mutation specifying which mutation you want to access. 
	getMutation(){
		return Relay.QL`muatation{signinUser}`
	}

	//A function available to Mutation that will tell your mutation what 
	//information to return after it is done with the mutation. If the mutation 
	//is succcessful, we want to receive this information. Each Relay mutation
	//defines a payload, which is what you can get back when you make the mutation.
	//So after a SigninUser mutation has been made, you want the server to tell you who
	//the who the viewer is. 
	getFatQuery(){
		return Relay.QL`
		fragment on SigninUserPayload{
			viewer
		}
		`
	}
	//A function available to Mutation that will specify what you are going to do, 
	//with the information you receive back from getFatQuery. Relay will return information
	//to you and then you need to tell th local store how to handle it. Relay has its 
	//own specifications that it asks for when declaring how you want the configs to look.
	//'RANGE_ADD' is telling Relay to look at the information that was returned, and add 
	//it where it fits to the allUsers connection.  And with 'REQUIRED_CHILDREN', 
	//you're saying, you need to get the information back, and when you get it back, 
	//let us use it in the immedate success callback.  
	getConfigs(){
		return[
			{
				type: 'REQUIRED_CHILDREN',
				children: [
				Relay.QL`
					fragment on SigninPayload{
						viewer{
							user{
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

