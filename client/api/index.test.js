import nock from 'nock'
import { getRecipes, getIngredients, getSteps } from './index'

test('API fetches recipes from server', () => {
  nock(/localhost/)
    .get('/api/recipes')
    .reply(200, 
      {recipes: [{ id: 1, name:'Caramelised Pork & Garlic Rice'}]})

  return getRecipes()
    .then(recipes => {
      expect(recipes.length).toBe(1)
      expect(recipes[0].id).toBe(1)
    })
})

test('API fetches ingredients from server', () => {
  nock(/localhost/)
    .get('/api/ingredients/1')
    .reply(200, 
      {ingredients: [{recipe_id: 1, ingredient_name: 'Baby Spinach', ingredient_quantity: 30, measurement_name: 'g'}]})
    
    return getIngredients(1)
    .then(ingredients => {
      expect(ingredients.ingredients[0]).toHaveProperty('recipe_id')
      expect(ingredients.ingredients[0].ingredient_quantity).toBe(30)
    })

})

test('API fetches steps from server', () => {
  nock(/localhost/)
    .get('/api/steps/1')
    .reply(200, 
      {steps: [{recipe_id: 1, step_number: 1, step_desc: 'add this to a bowl and then do something else'}]})
    
    return getSteps(1)
    .then(steps => {
      expect(steps.steps[0].step_number).toBe(1)
      expect(steps.steps.length).toBe(1)
    })

})

