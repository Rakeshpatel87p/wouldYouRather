import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionStatistics extends Component {
	render() {

		const { name, avatarUrl } = this.props.userData
		const { optionOne, optionTwo } = this.props.questionData
		const totalVotes = optionOne.votes.length + optionTwo.votes.length

		return (
			<div>
				<p>Asked by {name}</p>
				<img src={avatarUrl} />
				<p>Would you rather {optionOne.text}?</p>
				<p>{optionOne.votes.length} out of {totalVotes}</p>
				<p>Would you rather {optionTwo.text}?</p>
				<p>{optionTwo.votes.length} out of {totalVotes}</p>
			</div>
		)
	}
}

function mapStateToProps({questions, users, authedUser}, props) {
	const qid = '8xf0y6ziyjabvozdd253nd'
	const authToQuery = questions[qid].author
	//const userToQuery = questions[qid].author

	return {
		questionData: questions[qid],
		userData: users[authToQuery]
	}
}

export default connect(mapStateToProps)(QuestionStatistics)