import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../App.css';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import Dashboard from './Dashboard'
import AnswerPoll from './AnswerPoll'
import QuestionCard from './QuestionCard'
import NewQuestionCard from './NewQuestionCard'
import LeaderBoard from './LeaderBoard'
import Nav from './Nav'

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
						<Route path='/newQuestion' exact component={NewQuestionCard} />
						<Route path='/leaderBoard' exact component={LeaderBoard} />
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
