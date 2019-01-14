const logger = (store) => (next) => (action) => { //why follow this pattern?
	
	console.group(action.type)
	
		console.log('The action: ', action)
		const returnValue = next(action)
		console.log('The new state: ', store.getState())
	
	console.groupEnd()
	
	return returnValue
}

export default logger