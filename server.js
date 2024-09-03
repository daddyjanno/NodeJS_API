const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//our sample database
const db = {
    name: 'Photographers database',
    photographers: [
        {
            name: 'Mimi Keel',
            id: 243,
            city: 'London',
            country: 'UK',
            tagline: 'Voir le beau dans le quotidien',
            price: 400,
            portrait: 'MimiKeel',
        },
        {
            name: 'Ellie-Rose Wilkens',
            id: 930,
            city: 'Paris',
            country: 'France',
            tagline: 'Capturer des compositions complexes',
            price: 250,
            portrait: 'EllieRoseWilkens',
        },
        {
            name: 'Tracy Galindo',
            id: 82,
            city: 'Montreal',
            country: 'Canada',
            tagline: 'Photographe freelance',
            price: 500,
            portrait: 'TracyGalindo',
        },
        {
            name: 'Nabeel Bradford',
            id: 527,
            city: 'Mexico City',
            country: 'Mexico',
            tagline: "Toujours aller de l'avant",
            price: 350,
            portrait: 'NabeelBradford',
        },
        {
            name: 'Rhode Dubois',
            id: 925,
            city: 'Barcelona',
            country: 'Spain',
            tagline: 'Je crée des souvenirs',
            price: 275,
            portrait: 'RhodeDubois',
        },
        {
            name: 'Marcel Nikolic',
            id: 195,
            city: 'Berlin',
            country: 'Germany',
            tagline: 'Toujours à la recherche de LA photo',
            price: 300,
            portrait: 'MarcelNikolic',
        },
    ],
    media: [
        {
            id: 342550,
            photographerId: 82,
            title: 'Fashion Yellow Beach',
            image: 'Fashion_Yellow_Beach.webp',
            likes: 62,
            date: '2011-12-08',
            price: 55,
        },
        {
            id: 8520927,
            photographerId: 82,
            title: 'Fashion Urban Jungle',
            image: 'Fashion_Urban_Jungle.webp',
            likes: 11,
            date: '2011-11-06',
            price: 55,
        },
        {
            id: 9025895,
            photographerId: 82,
            title: 'Fashion Pattern on a Pattern',
            image: 'Fashion_Pattern_on_Pattern.webp',
            likes: 72,
            date: '2013-08-12',
            price: 55,
        },
        {
            id: 9275938,
            photographerId: 82,
            title: 'Wedding Gazebo',
            image: 'Event_WeddingGazebo.webp',
            likes: 69,
            date: '2018-02-22',
            price: 55,
        },
        {
            id: 2053494,
            photographerId: 82,
            title: 'Sparkles',
            image: 'Event_Sparklers.webp',
            likes: 2,
            date: '2020-05-25',
            price: 55,
        },
        {
            id: 7324238,
            photographerId: 82,
            title: '18th Anniversary',
            image: 'Event_18thAnniversary.webp',
            likes: 33,
            date: '2019-06-12',
            price: 55,
        },
        {
            id: 8328953,
            photographerId: 82,
            title: 'Wooden sculpture of a horse',
            video: 'Art_Wooden_Horse_Sculpture.mp4',
            likes: 24,
            date: '2011-12-08',
            price: 100,
        },
        {
            id: 7502053,
            photographerId: 82,
            title: 'Triangle Man',
            image: 'Art_Triangle_Man.webp',
            likes: 88,
            date: '2007-05-07',
            price: 55,
        },
        {
            id: 8523492,
            photographerId: 82,
            title: 'Purple Tunnel',
            image: 'Art_Purple_light.webp',
            likes: 24,
            date: '2018-05-05',
            price: 55,
        },
        {
            id: 75902334,
            photographerId: 82,
            title: 'Art Mine',
            image: 'Art_Mine.webp',
            likes: 75,
            date: '2019-11-25',
            price: 55,
        },

        {
            id: 73852953,
            photographerId: 925,
            title: '8 Rows',
            image: 'Sport_2000_with_8.webp',
            likes: 52,
            date: '2013-02-30',
            price: 70,
        },
        {
            id: 92758372,
            photographerId: 925,
            title: 'Fashion Wings',
            image: 'Fashion_Wings.webp',
            likes: 58,
            date: '2018-07-17',
            price: 70,
        },
        {
            id: 32958383,
            photographerId: 925,
            title: 'Melody Red on Stripes',
            image: 'Fashion_Melody_Red_on_Stripes.webp',
            likes: 11,
            date: '2019-08-12',
            price: 70,
        },
        {
            id: 928587383,
            photographerId: 925,
            title: 'Venture Conference',
            image: 'Event_VentureConference.webp',
            likes: 2,
            date: '2019-01-02',
            price: 70,
        },
        {
            id: 725639493,
            photographerId: 925,
            title: 'Product Pitch',
            image: 'Event_ProductPitch.webp',
            likes: 3,
            date: '2019-05-20',
            price: 70,
        },
        {
            id: 23394384,
            photographerId: 925,
            title: 'Musical Festival Keyboard',
            image: 'Event_KeyboardCheck.webp',
            likes: 52,
            date: '2019-07-18',
            price: 70,
        },
        {
            id: 87367293,
            photographerId: 925,
            title: 'Musical Festival Singer',
            image: 'Event_Emcee.webp',
            likes: 23,
            date: '2018-02-22',
            price: 70,
        },
        {
            id: 593834784,
            photographerId: 925,
            title: 'Animal Majesty',
            image: 'Animals_Majesty.webp',
            likes: 52,
            date: '2017-03-13',
            price: 70,
        },
        {
            id: 83958935,
            photographerId: 925,
            title: 'Cute puppy on sunset',
            video: 'Animals_Puppiness.mp4',
            likes: 52,
            date: '2016-06-12',
            price: 70,
        },
        {
            id: 394583434,
            photographerId: 527,
            title: 'Rocky mountains from the air',
            video: 'Travel_Rock_Mountains.mp4',
            likes: 23,
            date: '2017-03-18',
            price: 45,
        },
        {
            id: 343423425,
            photographerId: 527,
            title: 'Outdoor Baths',
            image: 'Travel_Outdoor_Baths.webp',
            likes: 101,
            date: '2017-04-03',
            price: 45,
        },
        {
            id: 73434243,
            photographerId: 527,
            title: 'Road into the Hill',
            image: 'Travel_Road_into_Hill.webp',
            likes: 99,
            date: '2018-04-30',
            price: 45,
        },
        {
            id: 23425523,
            photographerId: 527,
            title: 'Bridge into the Forest',
            image: 'Travel_Bridge_into_Forest.webp',
            likes: 34,
            date: '2016-04-05',
            price: 45,
        },
        {
            id: 23134513,
            photographerId: 527,
            title: 'Boat Wonderer',
            image: 'Travel_Boat_Wanderer.webp',
            likes: 23,
            date: '2017-03-18',
            price: 45,
        },
        {
            id: 92352352,
            photographerId: 527,
            title: 'Portrait Sunkiss',
            image: 'Portrait_Sunkissed.webp',
            likes: 66,
            date: '2018-05-24',
            price: 45,
        },
        {
            id: 34513453,
            photographerId: 527,
            title: 'Shaw Potrait',
            image: 'Portrait_Shaw.webp',
            likes: 52,
            date: '2017-04-21',
            price: 45,
        },
        {
            id: 23523533,
            photographerId: 527,
            title: 'Alexandra',
            image: 'Portrait_Alexandra.webp',
            likes: 95,
            date: '2018-11-02',
            price: 45,
        },
        {
            id: 525834234,
            photographerId: 527,
            title: 'Afternoon Break',
            image: 'Portrait_AfternoonBreak.webp',
            likes: 25,
            date: '2019-01-02',
            price: 45,
        },

        {
            id: 623534343,
            photographerId: 243,
            title: 'Lonesome',
            image: 'Travel_Lonesome.webp',
            likes: 88,
            date: '2019-02-03',
            price: 45,
        },
        {
            id: 625025343,
            photographerId: 243,
            title: 'Hillside Color',
            image: 'Travel_HillsideColor.webp',
            likes: 85,
            date: '2019-04-03',
            price: 45,
        },
        {
            id: 2525345343,
            photographerId: 243,
            title: 'Wednesday Potrait',
            image: 'Portrait_Wednesday.webp',
            likes: 34,
            date: '2019-04-07',
            price: 45,
        },
        {
            id: 2523434634,
            photographerId: 243,
            title: 'Nora Portrait',
            image: 'Portrait_Nora.webp',
            likes: 63,
            date: '2019-04-07',
            price: 45,
        },
        {
            id: 398847109,
            photographerId: 243,
            title: 'Raw Black Portrait',
            image: 'Portrait_Background.webp',
            likes: 55,
            date: '2019-06-20',
            price: 45,
        },
        {
            id: 2534342,
            photographerId: 243,
            title: 'Seaside Wedding',
            image: 'Event_SeasideWedding.webp',
            likes: 25,
            date: '2019-06-21',
            price: 45,
        },
        {
            id: 65235234,
            photographerId: 243,
            title: 'Boulder Wedding',
            image: 'Event_PintoWedding.webp',
            likes: 52,
            date: '2019-06-25',
            price: 45,
        },
        {
            id: 23523434,
            photographerId: 243,
            title: 'Benevides Wedding',
            image: 'Event_BenevidesWedding.webp',
            likes: 77,
            date: '2019-06-28',
            price: 45,
        },
        {
            id: 5234343,
            photographerId: 243,
            title: 'Wild horses in the mountains',
            video: 'Animals_Wild_Horses_in_the_mountains.mp4',
            likes: 142,
            date: '2019-08-23',
            price: 60,
        },
        {
            id: 95234343,
            photographerId: 243,
            title: 'Rainbow Bird',
            image: 'Animals_Rainbow.webp',
            likes: 59,
            date: '2019-07-02',
            price: 60,
        },

        {
            id: 52343416,
            photographerId: 195,
            title: 'Japanese Tower, Kyoto',
            image: 'Travel_Tower.webp',
            likes: 25,
            date: '2019-04-03',
            price: 60,
        },
        {
            id: 2523434,
            photographerId: 195,
            title: 'Senset on Canals, Venice',
            image: 'Travel_SunsetonCanals.webp',
            likes: 53,
            date: '2019-05-06',
            price: 60,
        },
        {
            id: 95293534,
            photographerId: 195,
            title: 'Mountain and Lake',
            image: 'Travel_OpenMountain.webp',
            likes: 33,
            date: '2019-05-12',
            price: 60,
        },
        {
            id: 356234343,
            photographerId: 195,
            title: 'City Bike and Stair, Paris',
            image: 'Travel_Bike_and_Stair.webp',
            likes: 53,
            date: '2019-06-20',
            price: 60,
        },
        {
            id: 235234343,
            photographerId: 195,
            title: 'Adventure Door, India',
            image: 'Travel_Adventure_Door.webp',
            likes: 63,
            date: '2019-06-26',
            price: 60,
        },
        {
            id: 6234234343,
            photographerId: 195,
            title: 'Contrast, St Petersburg',
            image: 'Architecture_Contrast.webp',
            likes: 52,
            date: '2019-06-30',
            price: 60,
        },
        {
            id: 6525666253,
            photographerId: 195,
            title: 'On a Hill, Tibet',
            image: 'Architecture_On_a_hill.webp',
            likes: 63,
            date: '2019-07-20',
            price: 60,
        },
        {
            id: 98252523433,
            photographerId: 195,
            title: 'Leaning Tower, Pisa',
            image: 'Architecture_Dome.webp',
            likes: 88,
            date: '2020-01-05',
            price: 60,
        },
        {
            id: 9259398453,
            photographerId: 195,
            title: 'Drone shot of Buenos Aires highways',
            video: 'Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4',
            likes: 57,
            date: '2020-01-20',
            price: 65,
        },
        {
            id: 3523523534,
            photographerId: 195,
            title: 'Corner Building and Blue Sky',
            image: 'Architecture_Corner_Room.webp',
            likes: 54,
            date: '2020-05-05',
            price: 60,
        },
        {
            id: 952343423,
            photographerId: 930,
            title: 'Tricks in the air',
            video: 'Sport_Tricks_in_the_air.mp4',
            likes: 150,
            date: '2018-02-30',
            price: 70,
        },
        {
            id: 235234343,
            photographerId: 930,
            title: 'Climber',
            image: 'Sport_Next_Hold.webp',
            likes: 101,
            date: '2018-03-05',
            price: 65,
        },
        {
            id: 235343222,
            photographerId: 930,
            title: 'Surfer',
            image: 'sport_water_tunnel.webp',
            likes: 103,
            date: '2018-03-10',
            price: 70,
        },
        {
            id: 7775342343,
            photographerId: 930,
            title: 'Skier',
            image: 'Sport_Sky_Cross.webp',
            likes: 77,
            date: '2018-04-16',
            price: 50,
        },
        {
            id: 9253445784,
            photographerId: 930,
            title: 'Race End',
            image: 'Sport_Race_End.webp',
            likes: 88,
            date: '2018-04-22',
            price: 65,
        },
        {
            id: 22299394,
            photographerId: 930,
            title: 'Jump!',
            image: 'Sport_Jump.webp',
            likes: 95,
            date: '2018-04-27',
            price: 70,
        },
        {
            id: 3452342633,
            photographerId: 930,
            title: 'White Light',
            image: 'Architecture_White_Light.webp',
            likes: 52,
            date: '2018-05-03',
            price: 75,
        },
        {
            id: 939234243,
            photographerId: 930,
            title: 'Water on Modern Building',
            image: 'Architecture_Water_on_Modern.webp',
            likes: 55,
            date: '2018-05-10',
            price: 72,
        },
        {
            id: 222959233,
            photographerId: 930,
            title: 'Horseshoe',
            image: 'Architecture_Horseshoe.webp',
            likes: 85,
            date: '2018-05-15',
            price: 71,
        },
        {
            id: 965933434,
            photographerId: 930,
            title: 'Cross Bar',
            image: 'Architecture_Cross_Bar.webp',
            likes: 66,
            date: '2018-05-20',
            price: 58,
        },
        {
            id: 777723343,
            photographerId: 930,
            title: 'Connected Curves',
            image: 'Architecture_Connected_Curves.webp',
            likes: 79,
            date: '2018-05-21',
            price: 80,
        },
    ],
}

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

router.post('/photographers', (req, res) => {
    const body = req.body

    //validate requires values
    if (!body.name) {
        return res.status(400).json({ error: 'Name is required' })
    }
    // check if photographer already exists
    if (db.photographers[body.name]) {
        return res.status(409).json({ error: 'photographer already exists' })
    }

    //create a new photographer
    const photographer = {
        name: req.body.name,
        id: req.body.id,
        city: req.body.city,
        country: req.body.country,
        tagline: req.body.tagline,
        price: req.body.price,
    }

    db.photographers.push(photographer)

    //return the photographer
    return res.status(201).json(photographer)
})

//register routes
app.use(apiRoot, router)

app.listen(port, () => {
    console.log('Server is up')
})
