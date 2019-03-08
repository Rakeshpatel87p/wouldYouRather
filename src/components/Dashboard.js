import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuestionCard from './QuestionCard'
import { Link, withRouter } from 'react-router-dom'

class Dashboard extends Component {
	render() {
		const { answered, unanswered } = this.props 
		
		return (
			<div>
				<h3>Your Timeline</h3>
				
				<h4>Answered Questions</h4>
				<ul className="answeredQuestions">
					{ answered.map((keyname) => (
						<Link key={keyname} to={`/questionStatistics/${keyname}`} className='tweet'>
							<li key={keyname}>
								<QuestionCard id={keyname} />
							</li>
						</Link>
					))}
				</ul>
				
				<h4>Unanswered Questions</h4>
				<ul className="questionsUnanswered">
					{ unanswered.map((keyname) => (
						<Link key={keyname} to={`/questionStatistics/${keyname}`} className='tweet'>
							<li key={keyname}>
								<QuestionCard id={keyname} />
							</li>
						</Link>
					))}
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

	//console.log("answered", answered);
	//console.log("unanswered", unanswered);
	
	return {
		authedUser,
		userData,
		answered: answered,
		unanswered: unanswered,
	}
}

export default withRouter(connect(mapStateToProps)(Dashboard))