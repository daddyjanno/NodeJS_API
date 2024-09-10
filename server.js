const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./data/photographers.js')
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
router.get('/', (req, res) => {
    res.send(`${db.name}`)
})

router.get('/photographers/', (req, res) => {
    const photographersList = db.photographers

    if (!photographersList) {
        return res.status(404).json({ error: 'No data for photographers' })
    }

    return res.json(photographersList)
})

router.get('/photographers/:id', (req, res) => {
    const user = req.params.id
    const photographer = db.photographers.find((el) => el.id === Number(user))

    if (!photographer) {
        return res
            .status(404)
            .json({ error: 'Photographer does not exist', photographer })
    }

    return res.json(photographer)
})

router.get('/photographers/:id/medias', (req, res) => {
    const user = req.params.id
    const medias = db.media.filter((el) => el.photographerId === Number(user))

    if (!medias) {
        return res.status(404).json({ error: 'No medias', medias })
    }

    return res.json(medias)
})

//register routes
app.use(apiRoot, router)
app.listen(port, () => {
    console.log('Server is up')
})
