import {FETCH_FAVOURITES, ADD_TO_FAVOURITES, REMOVE_FAVOURITE} from '../actions'

const favourites = (state = [], action) => {
  switch (action.type) {
    case FETCH_FAVOURITES:
      return action.favourites    
    case ADD_TO_FAVOURITES:
      return [...state, action.recipe]
    case REMOVE_FAVOURITE:
      return state.filter(item => item.recipe_id !== action.recipe_id)
    default:
      return state
  }
}

export default favourites