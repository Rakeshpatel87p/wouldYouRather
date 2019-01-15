import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {

	setAuthedUser = (event) => {
		//take value from below
		const selectedUser = event.target.value
		//dispatch action, setting AuthedUser
		this.props.dispatch(setAuthedUser(selectedUser))
	}

	render() {
		return (
			<div>
				<h1>Select From User List Below</h1>
				<select onChange={this.setAuthedUser}>
					{this.props.users.map((user) => (
						<option key={user} value={user}>{user}</option>
					))}
          		</select>
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
