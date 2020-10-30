import React, { Component } from 'react'
import axios from 'axios'
import './login.css';

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


render() {
	return (
		<div className="SignupForm">
				<h1 className='signup-title'>Sign up</h1>
				<h2 className='signup-subtitle'>Welcome book lovers</h2>
				<form className="form-horizontal">
					<div className="form-group username">
						<div className="col-12 col-md-5">
							<input className="form-input"
								type="text"
								id="username"
								name="username"
								placeholder="Username"
								value={this.state.username}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group password">
						<div className="col-12 col-md-5">
							<input className="form-input"
								placeholder="password"
								type="password"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className='button-holder'>
						<div className="form-group col-md-5 d-flex justify-content-end">
							<button className="login-button btn btn-primary col-3 col-md-1 d-flex justify-content-center align-items-center"
								onClick={this.handleSubmit}
								type="submit">
								Sign up
							</button>
						</div>
					</div>
					
				</form>
			</div>
		

	)
}
}

export default Signup
