import React, { Component } from 'react'

class NewQuestionCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			optionOneText: '',
			optionTwoText: ''
		}

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(event, element) {
    	this.setState({[element]: event.target.value});
  	}
  	
  	handleSubmit(event) {
    	event.preventDefault();
  	}
	
	render() {
		return (
			<div>
				<h3>Create New Question</h3>
				<h4>Would you rather...</h4>
				<form onSubmit={this.handleSubmit}>
         			<input type="text" 
         				onChange={(e) => {
         					this.handleChange(e, 'optionOneText')
         				}}
         			/>
         			<p>Or</p>
         			<input type="text" 
	         			onChange={(e) => {
	         				this.handleChange(e, 'optionTwoText')
	         			}}
         			/>
        			<input type="submit" value="Submit" />
      			</form>
			</div>
		)
	}
}

export default NewQuestionCard