import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import store from '../store'

import App from './App'

jest.mock('./RecipeList.jsx', () => { return () => <h1 role='heading'>Recipes</h1> })

test('renders home', () => {
  render(<Provider store={store}><App /></Provider>)
  let heading = screen.getAllByRole('heading')
  expect(heading[0].innerHTML).toMatch(/Recipes/)
})

