import { _saveQuestionAnswer } from '../utils/_Data'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	}
}

export function saveAnswer(questionAnswer) {
	return {
		type: SAVE_ANSWER,
		questionAnswer
	}
}

export function handleSaveQuestionAnswer(qid, answer) {
	return(dispatch, getState) => {
		
		const { authedUser } = getState()
		
		return _saveQuestionAnswer({
			authedUser, 
			qid, 
			answer
		})
			.then((savedAnswer) => dispatch(saveAnswer(savedAnswer)))
	}

}