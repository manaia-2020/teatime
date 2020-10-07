  
import request from 'supertest'

import server from '../server'
import {getRecipes} from '../db'

jest.mock('../db', () => ({
    getRecipes: jest.fn(),
}))

describe("GET /api/recipes", () => {
    test("returns recipes when successful", () => {
        getRecipes.mockImplementation(() => Promise.resolve([
            {id: 1, recipe_name: 'Beef Kebabs'}
        ]))
        return request(server)
            .get('/api/recipes')
            .then(res => {
                expect(res.status).toBe(200)
                expect(res.body.recipes.length).toBe(1)
            })
    })
    test("returns 500 if database function blows up", () => {
        getRecipes.mockImplementation(() => Promise.reject('error'))
        return request(server)
            .get('/api/recipes')
            .then(res => {
                expect(res.status).toBe(500)
                expect(res.text).toMatch(/something went wrong/)
            })
    })
})
//Need tests for other recipe routes