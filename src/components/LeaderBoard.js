import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserCard from './UserCard'

class LeaderBoard extends Component {
	
	render() {
		const { users } = this.props
		
		return (
			<div>
				<h1>LeaderBoard</h1>
				<ul>
					{Object.keys(users).map((user) => (
						<li key={user}>
							<UserCard userName={user} />
						</li>
					))}
				</ul>
			</div>
			
		)
	}
}

function mapStateToProps({users}) {
	return {
		users
	}
}

export default connect(mapStateToProps)(LeaderBoard)