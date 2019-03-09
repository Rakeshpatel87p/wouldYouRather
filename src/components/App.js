import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../App.css';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'
import Login from './Login'
import Dashboard from './Dashboard'
import AnswerPoll from './AnswerPoll'
import QuestionCard from './QuestionCard'
import NewQuestionCard from './NewQuestionCard'
import LeaderBoard from './LeaderBoard'
import QuestionStatistics from './QuestionStatistics'

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}
	render() {
		return (
			<Router>
				<div>
					<Nav />
				{ this.props.authedUser === null 
					? <Login />
					: <div>
						<Route path='/' exact component={Dashboard} />
						<Route path='/newQuestion' component={NewQuestionCard} />
						<Route path='/leaderBoard' component={LeaderBoard} />
						<Route path='/answerPoll/:qid' component={AnswerPoll} />
						<Route path='/questionStatistics/:qid' component={QuestionStatistics} />
					  </div>
				}
				
				</div>
			</Router>
		);
	}
}

function mapStateToProps({authedUser}) {
	return {
		authedUser
	}
}

export default connect(mapStateToProps)(App);
