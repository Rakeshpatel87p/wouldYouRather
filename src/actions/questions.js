import { saveQuestionAnswer, saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const SAVE_NEW_QUESTION = 'SAVE_NEW_QUESTION'

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

export function saveNewQuestion(newQuestionInfo) {
	return {
		type: SAVE_NEW_QUESTION,
		newQuestionInfo
	}
}

export function handleSaveAnswer(qid, answer) {
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

export function handleNewQuestion(optionOneText, optionTwoText, author) {
	return(dispatch) => {

		return saveQuestion({
			optionOneText,
			optionTwoText,
			author
		})

		.then((savedQuestion) => dispatch(saveNewQuestion(savedQuestion)))
	}
}