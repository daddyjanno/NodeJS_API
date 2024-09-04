const photographerService = require('../services/photographerService')

module.exports.createPhotographer = async (req, res) => {
    let response = {}

    try {
        const responseFromService =
            await photographerService.createPhotographer(req.body)
        response.status = 200
        response.message = 'Photographer successfully created'
        response.body = responseFromService
    } catch (error) {
        console.error(
            'Something went wrong in photographerController.js',
            error
        )
        response.status = 400
        response.message = error.message
    }

    return res.status(response.status).send(response)
}
