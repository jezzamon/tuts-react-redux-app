import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_COURSE:
            //this way copies over a new array with an extra value inside
            return [...state,
                Object.assign({}, action.course)
            ];
            
        default: 
            return state;
    }
}