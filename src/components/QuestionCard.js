import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionCard extends Component {
	render() {
		const {  question } = this.props

		return (
			<p>{question.id}</p>
		)
	}
}

function mapStateToProps({questions}, {id}) {
	return {
		question: questions[id],

	}
}

export default connect(mapStateToProps)(QuestionCard)