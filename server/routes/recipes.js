const express = require('express')
const db = require('../db')
const router = express.Router()

module.exports = router

//Get recipes and display on main page
router.get('/api/recipes', (req, res) => {
      //callback probably isn't the name you are wanting
  db.getRecipes()
    .then(callback => res.json({recipes: callback}))
    .catch(err => {
      console.log(err)
        res.status(500).send('something went wrong')
  })
})

//Get ingredients and display on page
router.get('/api/ingredients/:id', (req, res) => {
const id = req.params.id
  db.getIngredients(id)
    .then(callback => {
      //callback probably isn't the name you are wanting
      res.json({ingredients: callback})
    })
    .catch(err => {
      console.log(err)
        res.status(500).send('something went wrong')
    })
})

//get recipe steps
router.get('/api/steps/:id', (req, res) => {
  const id = req.params.id
  db.getSteps(id)
    .then(callback => {
      //callback probably isn't the name you are wanting
      res.json({steps: callback})
    })
    .catch(err => {
      console.log(err)
        res.status(500).send('something went wrong')
    })
})