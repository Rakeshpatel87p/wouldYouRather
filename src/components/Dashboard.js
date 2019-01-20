import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuestionCard from './QuestionCard'

class Dashboard extends Component {
	render() {
		const { questionsAnswered } = this.props 
		
		return (
			<div>
				<h3>Your Timeline</h3>
				<ul class="questions-answered">
				{ questionsAnswered.map((keyname) => (
					<li>
						<QuestionCard id={keyname.id} />
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
		userData,
		questionsAnswered: Object.keys(userData.answers).map((keyname) => (
			questions[keyname]
		))
	}
}

export default connect(mapStateToProps)(Dashboard)