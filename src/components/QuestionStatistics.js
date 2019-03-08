import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionStatistics extends Component {
	render() {

		const { name, avatarUrl } = this.props.userData
		const { optionOne, optionTwo } = this.props.questionData
		const { authedUser } = this.props.authedUser
		const totalVotes = optionOne.votes.length + optionTwo.votes.length

		console.log(this.props.questionData)
		console.log(this.props.userData)

		return (
			<div>
				<p>Asked by {name}</p>
				<img src={avatarUrl} />
				<p>Would you rather {optionOne.text}?</p>
				<p>{optionOne.votes.length} out of {totalVotes}</p>
				<p>Would you rather {optionTwo.text}?</p>
				<p>{optionTwo.votes.length} out of {totalVotes}</p>
				{optionOne.votes.includes(this.props.authedUser) || optionTwo.votes.includes(this.props.authedUser)
					? <p>You voted for this question</p>
					: null
				}
			</div>
		)
	}
}

function mapStateToProps({questions, users, authedUser}, props) {
	//const qid = props.match.params - not working, unable iterate over obj
	const qid ='vthrdm985a262al8qx3do'
	console.log(qid)
	const authToQuery = questions[qid].author

	return {
		questionData: questions[qid],
		userData: users[authToQuery],
		authedUser
	}
}

export default connect(mapStateToProps)(QuestionStatistics)