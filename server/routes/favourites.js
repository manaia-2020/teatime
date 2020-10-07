const express = require('express')
const db = require('../db')
const router = express.Router()

module.exports = router

//Get favourites 
router.get('/api/favourites/:id', (req, res) => { 
  const id = 1 //req.params.id  need to hook up with authenticare
  db.getFavourites(id)
        .then(favourites => {
        res.send(favourites)
    })
})

//Add favourites
router.post('/api/favourites', (req, res) => {
    let {user_id, recipe_id} = req.body
        db.addFavourite({user_id, recipe_id})
            .then((ids) => {
                res.status(201).json({id: ids[0]})
            })
})

//Delete favourite
router.delete('/api/favourites/:recipe_id', (req, res) => {
    let {recipe_id} = req.params
    if (!recipe_id) return res.status(400).send("no id specified")

    db.deleteFavourite(Number(recipe_id))
        .then((recordsDeleted) => {
            res.sendStatus(200)
        })
        .catch(error => {
            res.sendStatus(500)
        })

})