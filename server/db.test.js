const knex = require('knex')
const config = require('../knexfile').test

const db = require('./db')
const testDb = knex(config)

beforeAll(async () => await testDb.migrate.latest())
beforeEach(async () => await testDb.seed.run())
afterAll(async () => await testDb.destroy())

describe('Test getRecipes function', () => {
    test('Check function return correct number of recipes', () => {
        let promise = db.getRecipes(testDb)
           return promise.then((result) => {
                expect(result.length).toBe(6)
            })
    })
})

describe('Test getIngredients function', () => {
    test('check the function gets the correct amount of ingredients', () => {
        let promise = db.getIngredients(1, testDb)
        return promise.then((result) => {
            expect(result.length).toBe(17)
        })
    })
    test('checking the function gets the id, name, quantity, and measurement_name', () => {
        let promise = db.getIngredients(1, testDb)
        return promise.then((result) => {
            expect(result[0]).toHaveProperty("recipe_id")
            expect(result[0]).toHaveProperty("ingredient_name")
            expect(result[0]).toHaveProperty("ingredient_quantity")
            expect(result[0]).toHaveProperty("measurement_name")
        })
    })
})

describe('Test getSteps function', () => {
    test('check the function gets the correct amount of steps', () => {
        let promise = db.getSteps(1, testDb)
        return promise.then((result) => {
            expect(result.length).toBe(6)
        })
    })
    test('check the function gets the correct steps', () => {
        let promise = db.getSteps(1, testDb)
        return promise.then((result) => {
            expect(result[0].step_desc).toMatch(/In a medium saucepan/)
        })
    })
})

