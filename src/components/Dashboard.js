import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuestionCard from './QuestionCard'

class Dashboard extends Component {
	render() {
		const { userAnswers } = this.props 
		
		return (
			<div>
				<h3>Your Timeline</h3>
				<ul>
				{ Object.keys(userAnswers).map((keyname) => (
					<li>
						<QuestionCard question={keyname} answer={userAnswers[keyname]}/>
					</li>
				))}
				</ul>

			</div>
		)
	}
}

function mapStateToProps({authedUser, users, questions}) {
	//return object of user	
	const userData = users[authedUser]

	//const answeredQuestions = Object.keys(userData.answers)
	return {
		authedUser,
		user: userData,
		userAnswers: userData.answers 
	}
}

export default connect(mapStateToProps)(Dashboard)