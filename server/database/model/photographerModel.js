const mongoose = require('mongoose')

const photographerSchema = new mongoose.Schema(
    {
        name: String,
        id: Number,
        city: String,
        country: String,
        tagline: String,
        price: Number,
        portrait: String,
    },
    {
        timestamps: true,
        toObject: {
            transform: (doc, ret, options) => {
                ret.id = ret._id
                delete ret._id
                delete ret.__v
                return ret
            },
        },
    }
)

module.exports = mongoose.model('Photographer', photographerSchema)
