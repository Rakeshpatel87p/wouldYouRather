import { getInitialData } from '../utils/api.js'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_USER = null

export function handleInitialData() {
	return (dispatch) => {
		return getInitialData()
			.then(({users, questions}) => {
				dispatch(receiveUsers(users))
				dispatch(receiveQuestions(questions))
				dispatch(setAuthedUser(AUTHED_USER))
			})
	}
}

