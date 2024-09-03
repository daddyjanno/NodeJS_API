const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./data/photographers.json')

const port = process.env.PORT || 5000
const apiRoot = '/api'

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(
    cors({
        origin: /http:\/\/localhost/,
    })
)
app.options('*', cors())

//configure routes
const router = express.Router()
router.get('/', (request, response) => {
    response.send(`${db.name}`)
})

//register routes
app.use(apiRoot, router)

app.listen(port, () => {
    console.log('Server is up')
})
