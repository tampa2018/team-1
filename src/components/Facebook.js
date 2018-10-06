import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends Component {
	    state = {
		            isLoggedIn: false,
		            userId: '',
		            name: '',
		            email: '',
					picture: '',
					userCheck: '',
		        }

	    responseFacebook = response => {
					console.log(response);
					this.setState({
						isLoggedIn: response.userID ? true : false,
						userId: response.userID,
						name: response.name,
						picture: response.picture
					})

					getUser = _ => {
						fetch('http://localhost:4000/checkuser/' + response.userID)
						.then(response => response.json())
						.then(response => this.setState({ userCheck = response.data}))
						.catch(err => console.error(err))
					}

					localStorage.setItem("fbid", response.userID);

					console.log("Looking at usercheck" + userCheck);
					var splits = response.name.split(" ")
					if (userCheck == "0") {
						fetch('http://localhost:4000/user', {
							method: 'POST',
							headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json',
							},
							body: JSON.stringify({
								fbid: localStorage.getItem("fbid"),
								first_name: splits[0],
								last_name: splits[splits.length-1]
							})
						})
					}
		        }
		componentClicked = () => {
			console.log('Component clicked');
			console.log('yay');
	
		}
		thingsDone = () => console.log('things done');
	    render() {
		            let fbContent;

		            if (this.state.isLoggedIn) {
						return <Redirect to="/feed" />
					}
		            else {
				                fbContent = (<FacebookLogin
							        appId="305116443647503"
							        autoLoad={true}
							        fields="name,email,picture"
							        onClick={this.componentClicked}
							        callback={this.responseFacebook} />);
				            }
		            return (
				                <div>
				                    {fbContent}
				                </div>
				            )
		        }
}
