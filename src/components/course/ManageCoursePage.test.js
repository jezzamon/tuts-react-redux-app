import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage'; //get raw component for testing

describe('Manage course page', () => {
	const props = {
		authors: [],
		actions: { saveCourse: () => { return Promise.resolve(); }},
		course:  {
			id: '',
			watchHref: '',
			title: '',
			authorId: '',
			length: '',
			category: ''
		}
	};
	
	it('sets error message when trying to save empty title', () => {
		const wrapper = mount(<ManageCoursePage {...props}/>);
		const saveButton = wrapper.find('input').last();
		expect(saveButton.prop('type')).toBe('submit');
		saveButton.simulate('click');
	});
});

