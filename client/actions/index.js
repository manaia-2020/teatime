export const FETCH_RECIPES = 'FETCH_RECIPES'

export function fetchRecipes(recipes){
    return {
        type: FETCH_RECIPES,
        recipes
    }
}