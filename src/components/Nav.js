import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
	
	logout = (e) => {
		e.preventDefault()
		this.props.dispatch(setAuthedUser(null))
	}

	render() {

		const { authedUser } = this.props

		return (
			<nav className='nav'>
		      <ul>
		        <li>
		          <NavLink to='/' exact>
		            Home
		          </NavLink>
		        </li>
		        <li>
		          <NavLink to='/newQuestion'>
		            New Question
		          </NavLink>
		        </li>
		       	<li>
		          <NavLink to='/leaderBoard'>
		            Leader Board
		         </NavLink>
		        </li>
		        { authedUser === null
		        	? <Fragment></Fragment>
		        	: <Fragment>
		        		<li> Hello {authedUser}</li>	
			       		<li>
			          		<NavLink to='/' exact onClick={this.logout}>
			            		Logout
			         		</NavLink>
			        	</li>
			       	  </Fragment>
		        }
		      </ul>
		    </nav>
		)
	} 

	
}

function mapStateToProps({authedUser}) {
	return {
		authedUser
	}
}

export default connect(mapStateToProps)(Nav)

