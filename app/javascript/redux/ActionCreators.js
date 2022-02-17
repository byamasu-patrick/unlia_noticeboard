import * as ActionTypes from './ActionTypes';
import { BASE_URL } from '../shared/baseUrl';

export const fetchDishes = () => (dispatch) => {
    // Dispatch the dishes
    dispatch(dishesLoading(true));

    return fetch(BASE_URL +"dishes/index")
        .then(response => {
            if (response.ok) {
                return response;
            }
            else{
                var error = new Error("Error "+ response.status +": "+ response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errorMessage = new Error(error.message);
            throw errorMessage;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));

};
// Create the dishes loading function
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});
// Check if the dishes have failed to load
export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
})
// Create an addDishes reducer function to the store
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})
