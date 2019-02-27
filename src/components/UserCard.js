import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserCard extends Component {
	render() {
		const { name, avatarUrl, answers, questions } = this.props.userData
		return (
			<div>
				<p>{name}</p>
				<img src={avatarUrl} />
				<p>QuestionsAsked: {questions.length}</p>
				<p>QuestionsAnswered: {Object.keys(answers).length}</p>
			</div>
		)
	}
}

function mapStateToProps({users}, {userName}) {
	return {
		userData: users[userName]
	}
}

export default connect(mapStateToProps)(UserCard)