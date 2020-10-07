import { getRecipeIngredients,  getRecipeSteps, getAllIngredients, sortIngredients, removeDuplicates} from './helpers'

const ingredients = [{
    ingredients: [
        { recipe_id: 1, ingredient_name: 'Salt', ingredient_quantity: 30, measurement_name: 'tsp' },
        { recipe_id: 1, ingredient_name: 'Baby Spinach', ingredient_quantity: 30, measurement_name: 'g' }
    ]
},
{
    ingredients: [
        { recipe_id: 2, ingredient_name: 'Baby Spinach', ingredient_quantity: 30, measurement_name: 'g' },
        { recipe_id: 2, ingredient_name: 'Apple', ingredient_quantity: 1, measurement_name: '' }
    ]
}]

const steps = [{
    steps: [
        { recipe_id: 1, step_number: 1, step_desc: 'add this to a bowl and then do something else' },
        { recipe_id: 1, step_number: 2, step_desc: 'do some more stuff with the ingredients' }
    ]
},
{
    steps: [
        { recipe_id: 2, step_number: 1, step_desc: 'add this to a bowl and then do something else' },
        { recipe_id: 2, step_number: 2, step_desc: 'do some more stuff with the ingredients' }
    ]
}
]

const favouriteIds = [1, 2]

test('gets recipe ingredients by recipe_id', () => {
    const newIngredients = getRecipeIngredients(ingredients, 1)
    expect(newIngredients.length).toBe(2)
    expect(newIngredients[0].recipe_id).toBe(1)
})

test('gets recipe steps by recipe_id', () => {
    const newSteps = getRecipeSteps(steps, 2)
    expect(newSteps.length).toBe(2)
    expect(newSteps[0]).toHaveProperty('step_number')
})

test('gets all ingredients for favourite Ids', () => {
    const allIngredients = getAllIngredients(ingredients, favouriteIds)
    expect(allIngredients.length).toBe(4)
    expect(allIngredients[3].ingredient_name).toMatch(/Apple/)
})

test('sorts ingredients alphabetically', () => {
    const sortedIngredients = sortIngredients(getAllIngredients(ingredients, favouriteIds))
    expect(sortedIngredients[0].ingredient_name).toMatch(/Apple/)
    expect(sortedIngredients[3].ingredient_name).toMatch(/Salt/)
})

test('removes duplicate items and adds quantities of duplicate items', () => {
    const duplicatesRemoved = removeDuplicates(sortIngredients(getAllIngredients(ingredients, favouriteIds)))
    expect(duplicatesRemoved[1].ingredient_quantity).toBe(60)
    expect(duplicatesRemoved.length).toBe(3)
})