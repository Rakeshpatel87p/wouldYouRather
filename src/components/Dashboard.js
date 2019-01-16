import React, { Component } from 'react';
import { connect } from 'react-redux'

class Dashboard extends Component {
	render() {
		return (
			<div>
				<h3>Your Timeline</h3>
				
			</div>
		)
	}
}

function mapStateToProps({authedUser, users}) {
	//return object of user	
	return {
		authedUser,
		user: users[authedUser]
	}
}

export default connect(mapStateToProps)(Dashboard)