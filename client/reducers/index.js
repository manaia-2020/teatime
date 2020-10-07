import {combineReducers} from 'redux'

import recipesReducer from './recipes'
import ingredientsReducer from './ingredients'
import stepsReducer from './steps'
import favouriteReducer from './favourites'
import currentPageReducer from './currentPage'

export default combineReducers({
    currentPage: currentPageReducer,
    recipes: recipesReducer,
    ingredients: ingredientsReducer,
    steps: stepsReducer,
    favourites: favouriteReducer
})
