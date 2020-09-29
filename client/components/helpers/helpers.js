//I'm pretty sure the covid vaccine would be discovered immediately if this file had tests

export function getRecipeIngredients(ingredients, recipeId) {
    const ingredientsFilter = ingredients.filter(item => 
        {return item.ingredients[0]?.recipe_id === recipeId})
        return ingredientsFilter[0]?.ingredients
}

export function getRecipeSteps(steps, recipeId) {
    const stepsFilter = steps.filter(item => {
        return item.steps[0].recipe_id === recipeId})
        return stepsFilter[0].steps
}

export function getFavouriteIds(favourites) {
    return favourites.map(item => item.recipe_id)
}

export function getAllIngredients(ingredients, favouriteIds) {
    const allIngredientsArray = []
    const allIngredients = favouriteIds.map(favouriteId => ingredients.filter(item => { return item.ingredients[0]?.recipe_id === favouriteId }))
    allIngredients.map(item => Array.prototype.push.apply(allIngredientsArray, item[0]?.ingredients))
    return allIngredientsArray
}


export function sortIngredients(ingredientsList) {
    return ingredientsList.sort((prev,  current) => {
        if (prev.ingredient_name < current.ingredient_name) 
            return -1
        if (prev.ingredient_name > current.ingredient_name) 
          return 1
        return 0
  })}

export function removeDuplicates(arr) {
    var newArray = []
    arr.forEach(ingredient => {
        const existingIngredient = newArray.find(item => item.ingredient_name === ingredient.ingredient_name)
        if (existingIngredient) {
            existingIngredient.ingredient_quantity += ingredient.ingredient_quantity
        } if (!existingIngredient) {
            newArray.push(ingredient)
        }
    }
    )
    return newArray
}


    




