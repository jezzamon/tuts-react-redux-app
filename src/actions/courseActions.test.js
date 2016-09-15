import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

//Test a sync action
describe('Course Actions', () => {
	describe('CreateCourseSuccess', () => {
		it('Should create a CREATE_COURSE_SUCCESS action', () => {
			//arrange
			const course = {id: 'clean-code', title: 'Clean Code'};
			const expectedAction = {
				type: types.CREATE_COURSE_SUCCESS,
				course: course
			};

			//act
			const action = courseActions.createCourseSuccess(course);

			//assert
			expect(action).toEqual(expectedAction);
		});
	});
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async actions', () => {

	afterEach(() => {
		nock.cleanAll();
	});

	//note for async we pass (done) as an argument
	it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading course', (done) => {
		// Here's an example call to nock

//		nock('http://example.com')
//			.get('/courses')
//			.reply(200, {body: { course: [{ id:1, firstName: 'Cory', lastName: 'House'}] }});

	});

});
