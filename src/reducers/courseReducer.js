import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
    switch(action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        
		case types.CREATE_COURSE_SUCCESS:
            return [
				...state,
				Object.assign({}, action.course)
			];
			
		case types.UPDATE_COURSE_SUCCESS:
			return [
				...state.filter(course => course.id !== action.course.id),
				Object.assign({}, action.course)
			];
		
		default: 
            return state;
    }
}

//UPDATE_COURSE_SUCCESS
//using the filter function to get a list of courses EXCEPT for the course thats being updated, we slap a spread filter and that returns a brand new array of the filtered results
//we then use Object.assign to create a copy of the course passed in and included it in the array that we are ultimately returning
