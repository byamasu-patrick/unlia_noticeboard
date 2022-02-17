import * as ActionTypes from './ActionTypes';

// Create a reducer function which takes the current state as the parameter
// And the action to be performed and the second parameter( the action creator takes two parameters, the first one
// is the action type and the second one is the payload)
export const Dishes = (state = {
    isLoading: true,
    errMessage: null,
    dishes:[]
}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMessage: null, dishes: action.payload }
        case ActionTypes.DISHES_LOADING:            
            return { ...state, isLoading: true, errMessage: null, dishes: [] };
        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMessage: action.payload, dishes: [] }
        default:
            return state;
    }
}