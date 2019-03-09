import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionStatistics extends Component {
	render() {

		const { name, avatarUrl } = this.props.userData
		const { optionOne, optionTwo } = this.props.questionData
		const { authedUser } = this.props.authedUser
		const totalVotes = optionOne.votes.length + optionTwo.votes.length

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
	//const qid ='am8ehyc8byjqgar0jgpub9'
	const { qid } = props.match.params
	const authToQuery = questions[qid].author

	return {
		questionData: questions[qid],
		userData: users[questions[qid].author],
		authedUser
	}
}

export default connect(mapStateToProps)(QuestionStatistics)