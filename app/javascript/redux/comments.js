import * as ActionTypes from './ActionTypes';

// Create a reducer function which takes the current state as the parameter
// And the action to be performed and the second parameter( the action creator takes two parameters, the first one
// is the action type and the second one is the payload)
export const Comments = (state = {
    isLoading: true,
    errMessage: null,
    comments:[]
}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, errMessage: null, comments: action.payload }
        case ActionTypes.ADD_COMMENT:            
            var comment = action.payload;
            // Adding a new object from the state array ... concat() function here is an immutable object  
            return {...state, comments: state.comments.concat(comment)};
        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, errMessage: action.payload, comments: [] }
        default:
            return state;
    }
}