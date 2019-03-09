import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {

	setAuthedUser = (e) => {
		//take value from below
		const selectedUser = e.target.value
		//dispatch action, setting AuthedUser
		this.props.dispatch(setAuthedUser(selectedUser))
	}

	render() {
		return (
			<div class="login-wrapper">
				<h1>Would You Rather?</h1>
				<div class="login-border">
					<h3>Select Login</h3>
					<select onChange={this.setAuthedUser} defaultValue='unselected'>
						<option disabled value="unselected"> -- select an option -- </option>
						{this.props.users.map((user) => (
							<option key={user} value={user}>{user}</option>
						))}
	          		</select>
          		</div>
			</div>
		)
	}
}

function mapStateToProps({users}) {
	return {
		users: Object.keys(users)
	}
}

export default connect(mapStateToProps)(Login)
