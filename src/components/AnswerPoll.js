import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/questions'

class AnswerPoll extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedOption: 'optionOne' 
		}
	}
	submitAnswer = (e, id) => {
		e.preventDefault()
		const userResponse = this.state.selectedOption
		this.props.dispatch(handleSaveAnswer(id, userResponse))
	}

	handleOptionChange = (event) => {
		this.setState({
			selectedOption: event.target.value
		})
	}

	render() {

		const { dispatch, authedUser, question, id } = this.props;

		return (
			<div>
				<h3>Would you rather</h3>
				<p>{question.author}</p>
				
				<form>
					<input 
						id="optionOne" 
						type="radio" 
						name="userResponse" 
						value="optionOne"
						checked={this.state.selectedOption == 'optionOne'}
						onChange={this.handleOptionChange}
					/>
					<label for="optionOne">{question.optionOne.text}</label>
					<input 
						id="optionTwo" 
						type="radio" 
						name="userResponse" 
						value="optionTwo"
						checked={this.state.selectedOption == 'optionTwo'}
						onChange={this.handleOptionChange}
					/>
					<label for="optionTwo">{question.optionTwo.text}</label>
				</form>
				<button onClick={(e) => this.submitAnswer(e, id)}>
					Submit Answer
				</button>
			</div>
		)
	}
}

function mapStateToProps({authedUser, questions}, props) {
	const { qid } = props.match.params
	
	return {
		authedUser: authedUser,
		question: questions[qid],
	}
	
}
//Adding a new comment here to test out whether this is working
export default connect(mapStateToProps)(AnswerPoll)