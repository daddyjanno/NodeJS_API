const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//our sample database
const dbConnection = require('./database/connection')
dbConnection()

const PORT = process.env.PORT || 5000
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

// Handle custom routes
app.use('/api/photographer', require('./routes/photographerRoutes'))
const router = express.Router()

//configure routes
// router.get('/', (req, res) => {
//     res.send(`${db.name}`)
// })

router.get('/photographers/', (req, res) => {
    const photographersList = fetch('mongodb://127.0.0.1/FishEye/photographers')

    if (!photographersList) {
        return res.status(404).json({ error: 'No data for photographers' })
    }

    return res.json(photographersList)
})

// router.get('/photographers/:id', (req, res) => {
//     const user = req.params.id
//     const photographer = db.photographers.find((el) => el.id === Number(user))

//     if (!photographer) {
//         return res
//             .status(404)
//             .json({ error: 'Photographer does not exist', photographer })
//     }

//     return res.json(photographer)
// })

// router.post('/photographers', (req, res) => {
//     const body = req.body

//     //validate requires values
//     if (!body.name) {
//         return res.status(400).json({ error: 'Name is required' })
//     }
//     // check if photographer already exists
//     if (db.photographers[body.name]) {
//         return res.status(409).json({ error: 'photographer already exists' })
//     }

//     //create a new photographer
//     const photographer = {
//         name: req.body.name,
//         id: req.body.id,
//         city: req.body.city,
//         country: req.body.country,
//         tagline: req.body.tagline,
//         price: req.body.price,
//     }

//     db.photographers.push(photographer)

//     //return the photographer
//     return res.status(201).json(photographer)
// })

//register routes
app.use(apiRoot, router)

app.get('/', (req, res, next) => {
    res.send('Hello from my Express server')
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})
