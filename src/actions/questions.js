export const RECEIVE_QUESTIONS = 'RECEIVE_TWEETS'

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	}
}