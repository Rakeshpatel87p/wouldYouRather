import { RECEIVE_QUESTIONS } from '../actions/questions'
import { SAVE_ANSWER } from '../actions/questions'

export default function questions(state = {}, action) {
	switch(action.type) {
		case RECEIVE_QUESTIONS :
			return {
				...state,
				...action.questions,
			}
		case SAVE_ANSWER :
			return {
				...state,
				//other new stuff
			} 
			
		default :
			return state
	}
}