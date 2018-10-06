import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends Component {
	    state = {
		            isLoggedIn: false,
		            userId: '',
		            name: '',
		            email: '',
		            picture: ''
		        }

	    responseFacebook = response => {
					console.log(response);
					this.setState({
						isLoggedIn: response.userID ? true : false,
						userId: response.userID,
						name: response.name,
						picture: response.picture
					})
					localStorage.setItem("fbid", response.userID);
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
