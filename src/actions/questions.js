import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	}
}

export function saveAnswer({authedUser, qid, answer}) {
	return {
		type: SAVE_ANSWER,
		authedUser,
		qid,
		answer
	}
}

export function handleSaveQuestionAnswer(qid, answer) {
	return(dispatch, getState) => {
		
		const { authedUser } = getState()
		return saveQuestionAnswer({
			authedUser, 
			qid, 
			answer
		})
			.then((_savedAnswer) => dispatch(saveAnswer(_savedAnswer)))
	}

}