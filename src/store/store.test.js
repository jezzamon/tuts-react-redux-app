import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';  //searches index.js file if just directory
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', () => {
	it('Should handle creating courses', () => {
		// arrange
		const store = createStore(rootReducer, initialState);
		const course = {
			title: "Clean Code"
		};

		// act
		const action = courseActions.createCourseSuccess(course);
		store.dispatch(action); //could dispatch multiple actions here and assert on result

		// assert
		const actual = store.getState().courses[0];
		const expected = {
			title: "Clean Code"
		};

		expect(actual).toEqual(expected);
	});
});
