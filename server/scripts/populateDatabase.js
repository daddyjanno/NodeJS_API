const axios = require('axios')
const signupApi = 'http://localhost:5000/api/photographer/signup'

const photographers = [
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
]

photographers.forEach((photographer) => {
    axios
        .post(signupApi, photographer)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
})
