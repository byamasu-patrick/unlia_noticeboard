import { createStore, combineReducers, applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Dishes } from './dishes'
import { Comments } from './comments';
import { DishComment } from './forms';
// This file is used to configure our store to use of the initial state as well as the 
// reducer function. We create the redux store using the createStore() function, a function coming from the 
// redux package

export const ConfigureStore = () => {
    // Let create the store
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            ...createForms({
                comment_form: DishComment
            })
        }), applyMiddleware(thunk, logger)
    );
    return store;
}


