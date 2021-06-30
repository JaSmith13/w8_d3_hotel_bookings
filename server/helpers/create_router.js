const express = require('express')
const ObjectID = require('mongodb').ObjectID

const createRouter = function(collection) {

    const router = express.Router()

    const handleError = (err) => {
        console.error(err)
            res.status(500)
            res.json({
                status: 500,
                error: err
            })
    }

    //INDEX
    router.get('/', (req, res) => {
        collection.find().toArray()
        .then((docs) => res.json(docs))
        .catch((err) => handleError(err))
    })

    //SHOW
    router.get('/:id', (req, res) => {
        const id = req.params.id
        collection.findOne({_id: ObjectID(id)})
        .then((doc) => res.json(doc))
        .catch((err) => handleError(err)) 
    })

    //CREATE
    router.post('/', (req, res) => {
    const newData = req.body
    collection.insertOne(newData)
    .then((docs) => res.json(docs))
    .catch((err) => handleError(err))
    })

    //DELETE
    router.delete('/:id', (req, res) => {
        const id = req.params.id
        collection.deleteOne({_id: ObjectID(id)})
        .then((docs) => res.json(docs))
        .catch((err) => handleError(err))
    })

    //UPDATE
    router.put('/:id', (req, res) => {
        const id = req.params.id
        const updatedData = req.body
        collection.updateOne({_id: ObjectID(id)}, {$set: updatedData})
        .then((docs) => res.json(docs))
        .catch((err) => handleError(err))
    })

    return router
}

module.exports = createRouter