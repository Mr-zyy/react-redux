import * as actionType from '../constants/userinfo.js'
const initState = {}
// Reducer 只是一些纯函数，它接收先前的 state 和 action，并返回新的 state
export default function userInfo(state = initState, action){
	  	switch (action.type){
	  		case actionType.USER_LOGIN:
	  		  return action.data
	  		case actionType.UPDATE_CITY:
	  		  return action.data
	  		default:
	  		  return state
	  	}
}