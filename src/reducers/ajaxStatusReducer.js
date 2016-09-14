import * as types from '../actions/actionTypes';
import initialState from './initialState';

//any action type that ends in SUCCESS will not be handled here, meaning the same action can be handled in multiple reducers.
//remember each reducer just handles a a slice of state


function actionTypeEndsInSuccess (type) {
	return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer (state = initialState.ajaxCallsInProgress, action) {
	if (action.type == types.BEGIN_AJAX_CALL) {
		return state + 1;
	} else if (action.type == types.AJAX_CALL_ERROR ||
				actionTypeEndsInSuccess(action.type)) {
		return state - 1;
	}

	return state;
}
