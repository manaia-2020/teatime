export const FETCH_RECIPES = 'FETCH_RECIPES'
export const FETCH_INGREDIENTS = 'FETCH_INGREDIENTS'
export const FETCH_STEPS = 'FETCH_STEPS'

export const FETCH_FAVOURITES = 'FETCH_FAVOURITES'
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE'

export const CHANGE_PAGE = 'CHANGE_PAGE'

export function changePage(page) {
    return {
        type: CHANGE_PAGE,
        page
    }
}

export function fetchRecipes (recipes){
    return {
        type: FETCH_RECIPES,
        recipes
    }
}

export function fetchIngredients (ingredients){
    return {
        type: FETCH_INGREDIENTS,
        ingredients
    }
}

export function fetchSteps (steps){
    return {
        type: FETCH_STEPS,
        steps
    }
}

//FAVOURITES

export const fetchFavourites = (favourites) => {
  return {
    type: FETCH_FAVOURITES,
    favourites
  }
}

export const addToFavourites = (recipe) => {
  return {
    type: ADD_TO_FAVOURITES,
    recipe
  }
}

export const removeFavourite = (recipe_id) => {
  return {
    type: REMOVE_FAVOURITE,
    recipe_id
  }
}