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
});
// Create an addDishes reducer function to the store
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});
// Comments action creators
export const fecthComments = () => (dispatch) => {
    // Fetch the comments from the server
    return fetch(BASE_URL +"comments/index")
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
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};
// Add Comments to the redux store
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});
// Add the failed message
export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    // Let get the csrf token for the communication purpose 
    const csrfToken = document.querySelector('[name=csrf-token]').content;
    //console.log(csrfToken);
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };

    return fetch( BASE_URL +'comments/create', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrfToken
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if(response.ok){
            return  response;
        }
        else{
            var error = new Error("Error "+ response.status +": "+ response.statusText);
            error.response = response;
            throw error;
        }
    }, 
    error => {
        var errormess = new Error(error.message);
        throw errormess;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {
        console.log("Post comment: "+ error.message);
        alert("Your comment could not be posted\nError: "+ error.message);
    });
    
};
export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

/* 
    Auhentication service here


*/

export const createUser = () => () => {
    // Let get the csrf token for the communication purpose 
    const csrfToken = document.querySelector('[name=csrf-token]').content;
    //console.log(csrfToken);
    const newUser = {
        'user': {
            name: 'Don Nshombo',
            profile: '/images/pp.jpg',
            location: 'Lilongwe',
            email: 'don@gmail.com',
            password: 'don??>>2020',
            password_confirmation: 'don??>>2020'
        }
    }
    ;
    return fetch(BASE_URL +'registration/create', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrfToken
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if(response.ok){
            return  response;
        }
        else{
            var error = new Error("Error "+ response.status +": "+ response.statusText);
            error.response = response;
            throw error;
        }
    }, 
    error => {
        var errormess = new Error(error.message);
        throw errormess;
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("Create User: "+ error.message);
        alert("User account could not be created\nError: "+ error.message);
    });
};