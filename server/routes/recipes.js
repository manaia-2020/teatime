const express = require('express')
const db = require('../db')
const router = express.Router()

module.exports = router

router.get('/api/recipes', (req, res) => {
    db.getRecipes()
        .then(callback => res.json({ recipes: callback }))
        .catch(err => {
            res.status(500).send('something went wrong')
        })
})