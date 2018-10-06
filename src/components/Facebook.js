import React, { Component } from 'react'
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
						isLoggedIn: true,
						userId: response.userID,
						name: response.name,
						picture: response.picture
					})
					this.state.LoggedIn = true;
		        }
	    componentClicked = () => console.log('Component clicked');
	    render() {
		            let fbContent;

		            if (this.state.isLoggedIn) {
				                fbContent = (
									<div style={{
										width: '400px',
										margin: 'auto',
										background: 'white',
										padding: '20px'
									}}>
										<h2> {this.state.name} </h2>
									</div>
								);
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
