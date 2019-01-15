import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
	render() {
		console.log(this.props)
		return (
			<div>
				<h1>Select From User List Below</h1>
				<ul>
					{this.props.users.map((user) => (
						<li key={user}>
							{user}
						</li>
					))}
				</ul>
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
