import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
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
	      	<li>
	          Hello Logged in User
	        </li>
	       	<li>
	          <NavLink to='/' exact>
	            Logout
	         </NavLink>
	        </li>
	      </ul>
	    </nav>
	)
}