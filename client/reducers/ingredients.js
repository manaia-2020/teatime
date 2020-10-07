import {FETCH_INGREDIENTS} from '../actions'

const initialState = []

export default function ingredientsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_INGREDIENTS:
            return getNewState(state, action.ingredients)
        default:
            return state
    }
}

function getNewState(state, ingredients) {
    const existingIngredients = state.find(item => item.ingredients[0]?.recipe_id === ingredients.ingredients[0]?.recipe_id)
    if (!existingIngredients){
        return [...state, ingredients]
    } 
    return state
}