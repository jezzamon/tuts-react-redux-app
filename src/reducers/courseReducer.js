export default function courseReducer(state = [], action) {
    switch(action.type) {
        case 'CREATE_COURSE':
            //state.push(action.course); (don't do this, state should be immutable)
            //return state;
            //this way copies over a new array with an extra value inside
            return [...state,
                Object.assign({}, action.course)
            ];
            
        default: 
            return state;
    }
}