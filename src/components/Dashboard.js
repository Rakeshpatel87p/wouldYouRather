import React, { Component } from 'react';
import { connect } from 'react-redux'

class Dashboard extends Component {
	render() {
		return (
			<div>
				<h1>We've reached {this.props.authedUser}'s Dashboard</h1>
			</div>
		)
	}
}

function mapStateToProps({authedUser}) {
	return {
		authedUser
	}
}

export default connect(mapStateToProps)(Dashboard)