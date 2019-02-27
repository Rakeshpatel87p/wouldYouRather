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

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}
	render() {
		return (
				<div>
				{ this.props.authedUser === null 
					? <Login />
					: <LeaderBoard />
				}
				
				</div>
		);
	}
}

function mapStateToProps({authedUser}) {
	return {
		authedUser
	}
}

export default connect(mapStateToProps)(App);
