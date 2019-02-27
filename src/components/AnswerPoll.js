import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/questions'

class AnswerPoll extends Component {

	submitAnswer = (e, id) => {
		e.preventDefault()
		const optionTwo = 'optionTwo'
		this.props.dispatch(handleSaveAnswer(id, optionTwo))
	}

	render() {

		const { dispatch, authedUser, question, id } = this.props;

		return (
			<div>
				<h3>Would you rather</h3>
				<p>{question.author}</p>
				
				<form>
					<input id="optionOne" type="radio" name="userResponse" value="optionOne" />
					<label for="optionOne">{question.optionOne.text}</label>
					<input id="optionTwo" type="radio" name="userResponse" value="optionTwo" />
					<label for="optionTwo">{question.optionTwo.text}</label>
				</form>
				<button onClick={(e) => this.submitAnswer(e, id)}>
					Submit Answer
				</button>
			</div>
		)
	}
}

function mapStateToProps({authedUser, questions}, {id}) {

	return {
		authedUser: authedUser,
		question: questions[id],
	}
	
}

export default connect(mapStateToProps)(AnswerPoll)