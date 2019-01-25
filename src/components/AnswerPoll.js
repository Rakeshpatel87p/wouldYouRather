import React, { Component } from 'react';
import { connect } from 'react-redux'
import { saveAnswer } from '../actions/questions'

class AnswerPoll extends Component {

	submitAnswer = (e) => {
		e.preventDefault()

		const { dispatch, question, id } = this.props

		dispatch(saveAnswer(id, 'optionTwo'))
	}

	render() {
		const { question } = this.props

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
				<button onClick={this.submitAnswer}> Submit Answer</button>
			</div>
		)
	}
}

function mapStateToProps({questions}, {id}) {
	//const { id } = props.match.params

	return {
		question: questions[id],
	}
	
}

export default connect(mapStateToProps)(AnswerPoll)