import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}
	render() {
		return (
		  <div className="App">
		    <h1>Howdy Rakesh</h1>
		  </div>
		);
	}
}

export default connect()(App);
