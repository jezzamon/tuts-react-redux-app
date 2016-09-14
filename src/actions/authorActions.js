import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors: authors};
}

//thunk actions (thunk always returns a function that accepts a dispatch)
export function loadAuthors() {
    return (dispatch) => {
		dispatch(beginAjaxCall());
        return authorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        })
        .catch( error => {
           throw(error);
        });
    };
}
