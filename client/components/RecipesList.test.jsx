import React from 'react'
import { Provider } from 'react-redux'
import {render, screen, waitFor} from '@testing-library/react'
import store from '../store'

import RecipesList from './RecipeList'
import { getRecipes, getIngredients, getSteps } from '../api'

jest.mock('../api', () => ({
  getRecipes: jest.fn(),
  getIngredients: jest.fn(),
  getSteps: jest.fn()
}))



let tempRecipes = [
  {id: 1, name: 'Curry', URL: "Insert Url", info: 'Truly exquisite'},
  {id: 2, name: 'Chicken', URL: "Insert Url", info: 'NomNom'}
]

beforeEach(() => {
  getRecipes.mockImplementation(() => Promise.resolve(tempRecipes))
  getIngredients.mockImplementation(() => Promise.resolve(tempRecipes))
  getSteps.mockImplementation(() => Promise.resolve(tempRecipes))
})

test('displays tempRecipes', () => {
  render(<Provider store={store}><RecipesList /></Provider>)
  expect(tempRecipes.length).toBe(2)
  expect(tempRecipes[0].name).toMatch(/Curry/)
})