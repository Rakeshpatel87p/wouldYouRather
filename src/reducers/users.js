import { RECEIVE_USERS } from '../actions/users'
import { SAVE_ANSWER } from '../actions/questions'


export default function users(state = {}, action) {
	switch(action.type) {
		case RECEIVE_USERS :
			return {
				...state,
				...action.users
			}

		case SAVE_ANSWER :
			const { authedUser, qid, answer } = action
			const newAnswer = { qid: answer }
			console.log(state[authedUser])
			return {
				...state,
				[authedUser] : {
					...state[authedUser],
					answers: {
						...state[authedUser].answers,
						[qid]: answer
					}
				}
			}
		default :
			return state
	}
}