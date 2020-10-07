const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const database = require('knex')(config)

module.exports = {
    getRecipes,
    getIngredients,
    getSteps,
    addFavourite,
    getFavourites,
    deleteFavourite
}

function getRecipes(db = database) {
    return db('recipes')
}

function getIngredients(id, db = database) {
        return db('quantities')
            .join('recipes', 'recipes.id', 'quantities.recipe_id')
            .join('ingredients', 'ingredients.id', 'quantities.ingredient_id' )
            .join('measurements', 'measurements.id', 'quantities.measurement_id')
            .where('recipes.id', id)
            .select('recipe_id', 'ingredient_name', 'ingredient_quantity', 'measurement_name')
            .then((result) => {
                return result
            })   
}

function getSteps(id, db = database) {
    return db('steps')
        .join('recipes', 'recipes.id', 'steps.recipe_id')
        .where('recipes.id', id)
        .select('recipe_id', 'step_number', 'step_desc')
        .then((result) => {
            return result
        })
}

//Favourties
function getFavourites(id, db = database){
  return db('favourites')
    .select('user_id','recipe_id')
    .where('user_id', id)

} 

function addFavourite({user_id, recipe_id}, db = database){
    return db('favourites').insert({user_id, recipe_id})
}

function deleteFavourite(recipe_id, db = database){
    if(!recipe_id) return Promise.reject("id must be specified")
    return db('favourites').where({recipe_id}).delete()
}






