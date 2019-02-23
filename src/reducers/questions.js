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
			const { authedUser, qid, answer } = action
			const newAnswer = {qid: answer}
			const { questions } = state

			return {
				...state,
				[qid] : {
					...state[qid],
					[answer] : {
						...state[qid][answer],
						votes: state[qid][answer].votes.concat([authedUser])
					}
					
				},
				/* Not working for some reason
				[authedUser] : {
					...state[authedUser],
					answers: {...state[authedUser].answers, qid: answer }

				}
				
				[authedUser] : {
					...state[authedUser],
					answers: {
						...state[authedUser].answers, [qid] : answer 
					}
				}
				*/
			} 
			
		default :
			return state
	}
}