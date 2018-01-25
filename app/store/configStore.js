import {createStore} from 'redux'
import rootReducers from './../reducers/index.js'

export default function configStore(initialState) {
	const store = createStore(rootReducers, initialState, 
		//触发redux-devtools
		window.devToolsExtension ? window.devToolsExtension() : undefined
	)
	return store
}