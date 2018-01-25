import * as actionTypes from './../constants/userinfo.js'

export function login(data){
			return {
				type: actionTypes.USER_LOGIN,
				data
			}
}
export function updateCityName(data){
			return {
				type: actionTypes.UPDATE_CITYNAME
			}
}