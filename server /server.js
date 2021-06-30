const express = require ('express')
const app = express()
const MongoClient = require ('mongodb').MongoClient
const createRouter = require ('./helpers/create_router.js')
const cors = require ('cors')

app.use(express.json())
app.use(cors())

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
    const db = client.db('hotel')
    const bookingsCollection = db.collection('bookings')
    const bookingsRouter = createRouter(bookingsCollection)
    app.use('/api/bookings', bookingsRouter)
})
.catch(console.error)

app.listen(5000, () => {
    console.log(`The ports power is over ${this.address().port}`)
})