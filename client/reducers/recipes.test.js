import { fetchRecipes } from '../actions'
import recipesReducer from './recipes'

test('initial state is an empty array', () => {
    let state = recipesReducer(undefined, {})
    expect(state.length).toBe(0)
})

test('FETCH_RECIPES fetches the recipes', () => {
    let recipes = [{recipe_name: 'Korean Beef Tacos'}]
    let action = fetchRecipes(recipes)
    let newState = recipesReducer([], action)
    expect(newState).toEqual(recipes)
})