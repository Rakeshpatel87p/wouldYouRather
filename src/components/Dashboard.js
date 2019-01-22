import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuestionCard from './QuestionCard'

class Dashboard extends Component {
	render() {
		const { answered } = this.props 
		
		return (
			<div>
				<h3>Your Timeline</h3>
				<ul className="answeredQuestions">
				{ answered.map((keyname) => (
					<li>
						<QuestionCard id={keyname.id} />
					</li>
				))}
				</ul>
				<ul className="questionsUnanswered">

				</ul>

			</div>
		)
	}
}

function mapStateToProps({authedUser, users, questions}) {
	//return object of user	
	const userData = users[authedUser]

	const answered = Object.keys(questions).filter(qid => {
  		const question = questions[qid]; // get the question
  		const { optionOne, optionTwo } = question; // get both options
  		return optionOne.votes.includes(userData.id) || optionTwo.votes.includes(userData.id);
	});

	const unanswered = Object.keys(questions).filter(
  		qid => !answered.includes(qid)
	);

	console.log("answered", answered);
	console.log("unanswered", unanswered);
	
	return {
		authedUser,
		userData,
		answered: answered,
		unanswered: unanswered,
	}
}

export default connect(mapStateToProps)(Dashboard)