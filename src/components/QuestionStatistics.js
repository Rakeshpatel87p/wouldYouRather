import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionStatistics extends Component {
	render() {
		//const { name, avatarUrl } = this.props.userData

		return (
			<div>
				<h1>Results:</h1>

			</div>
		)
	}
}

function mapStateToProps({questions, users}, props) {
	const [qid] = '8xf0y6ziyjabvozdd253nd'
	//const userToQuery = questions[qid].author
	console.log(questions[qid])
	return {
		questionData: questions[qid],
		//userData: users[questions[qid].author]
	}
}

export default connect(mapStateToProps)(QuestionStatistics)