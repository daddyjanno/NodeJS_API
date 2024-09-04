const Photographer = require('../database/model/photographerModel')

module.exports.createPhotographer = async (serviceData) => {
    try {
        const photographer = await Photographer.findOne({
            name: serviceData.name,
        })
        if (photographer) {
            throw new Error('Photographer already exists')
        }

        const newPhotographer = new Photographer({
            name: serviceData.name,
            id: serviceData.id,
            city: serviceData.city,
            country: serviceData.country,
            tagline: serviceData.tagline,
            price: serviceData.price,
            portrait: serviceData.portrait,
        })

        let result = await newPhotographer.save()

        return result
    } catch (error) {
        console.error('Error in userService.js', error)
        throw new Error(error)
    }
}
