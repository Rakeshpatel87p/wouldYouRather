import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}
	render() {
		return (
			<div>
			{ this.props.authedUser === null 
				? <Login />
				: 	<div> 
						<h1>User already set</h1>
			  		</div>
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
