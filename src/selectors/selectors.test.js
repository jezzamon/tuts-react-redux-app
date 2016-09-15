import expect from 'expect';
import { authorsFormattedForDropdown } from './selectors';

describe('Author Selectors', () => {
	describe('authorsFromattedForDropdown', () => {
		it('should return author data formatted for use in a dropdown', () => {
			const authors = [
				{id: 'cory-dude', firstName: 'Cory', lastName: 'Dude'},
				{id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'}
			];


			const expected = [
				{value: 'cory-dude', text: 'Cory House'},
				{value: 'scott-allen', text: 'Scott Allen'}

			];

			expect(authorsFormattedForDropdown(authors)).toEqual(expected);
		});
	}) ;
});

//if you need to test mapStateToProps consider extracting complicated pieces into separate
//selectors, which is just a plain name for pure functions that are easy to test (or if you are using reselect which is expensive to run)

