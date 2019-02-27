import { RECEIVE_QUESTIONS } from '../actions/questions'
import { SAVE_ANSWER, SAVE_NEW_QUESTION } from '../actions/questions'

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
			console.log(state)
			return {
				...state,
				[qid] : {
					...state[qid],
					[answer] : {
						...state[qid][answer],
						votes: state[qid][answer].votes.concat([authedUser])
					}
					
				},
				 //Not working- cannot read property answers of undefined
				[authedUser] : {
					...state[authedUser],
					answers: {...state[authedUser].answers, qid: answer }

				}
			}
		
		case  SAVE_NEW_QUESTION : {
			const { optionOneText, optionTwoText, author, id } = action
			console.log(state);
			//Not working - cannot read property questions of undefined 
			return {
				...state,
				[author] : {
					...state[author],
					questions: state[authedUser].questions.concat([id])
				}
			}
		}
		
			
		default :
			return state
	}
}