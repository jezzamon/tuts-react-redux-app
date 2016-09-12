import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, course: courses};
}

//thunk actions (tunk always returns a function that accepts a dispatch)
export function loadCourses() {
    return function(dispatch) {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        })
        .catch( error => {
           throw(error); 
        });
    };
}