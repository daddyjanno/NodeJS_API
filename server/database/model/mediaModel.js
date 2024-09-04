const mongoose = require('mongoose')

const mediaSchema = new mongoose.Schema(
    {
        id: Number,
        photographerId: Number,
        title: String,
        image: String,
        likes: Number,
        date: String,
        price: Number,
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

module.exports = mongoose.model('Media', mediaSchema)
