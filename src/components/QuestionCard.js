import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionCard extends Component {
	render() {
		return (
			<p>Hey cowboy</p>
		)
	}
}

function mapStateToProps({questions, users}, {id}) {
	return {
		question: questions[id],
		questionAuthorInfo: users[questions[id].author]
	}
}

export default connect(mapStateToProps)(QuestionCard)