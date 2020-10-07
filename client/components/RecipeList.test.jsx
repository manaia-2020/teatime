import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store'

import RecipeList from './RecipeList'
import { getRecipes } from '../api'
import { FETCH_RECIPES } from '../actions'


jest.mock('../api', () => ({
    getRecipes: jest.fn()
}))

jest.spyOn(store, 'getState')
jest.spyOn(store, 'dispatch')


let recipes = [
    {id: 1, recipe_name:'Caramelised Pork & Garlic Rice'},
    {id: 2, recipe_name:'Thai Beef Stir-Fry'},
    {id: 3, recipe_name:'Korean Beef Tacos'},
    {id: 4, recipe_name:'Crispy Japanese Chicken'},
    {id: 5, recipe_name:'Beef Stroganoff'},
    {id: 6, recipe_name:'Herby Crumbed Fish'}
]

beforeEach(() => {
    store.getState.mockImplementation(() => ({ recipes }))
    getRecipes.mockImplementation(() => Promise.resolve(recipes))
})


test("displays recipe list",  async () => {
    render(<Provider store={store}><RecipeList /></Provider>)
    await waitFor(() => getRecipes.mock.calls.length > 0)
    const recipes = screen.getAllByRole('listitem')
    expect(recipes.length).toBe(6)
    expect(recipes[2].innerHTML).toMatch(/Korean/)
})

test('get recipes from api when component mounts', async () => {
    render(<Provider store={store}><RecipeList /></Provider>)
    await waitFor(() => store.dispatch.mock.calls.length > 0)
    expect(store.dispatch).toHaveBeenCalled()
    expect(store.dispatch.mock.calls[0][0].type).toBe[FETCH_RECIPES]
})