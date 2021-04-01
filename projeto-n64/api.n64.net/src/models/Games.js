const {Schema, model} = require('mongoose')

const GameSchema = new Schema({
    title :{
        type:String,
        require: true
    },
    otherTitles: [String],
    developers: [String],
    publishers: [String],
    genres: [String],
    firstReleased: Date,
    japanRelease: Date,
    usaRelease: Date,
    euroRelease: Date
}, { collection: 'games', strict: false })

const Game = model('Game', GameSchema)

module.exports = {
    find: (criteria) => {
        const { limit, page, fields, orderBy, sortBy = 1 } = criteria
        const offset = page > 1 ? (page - 1) * limit : 0

        const query = Game.find()
        if(limit) query.limit(limit)
        if(offset) query.skip(offset)
        if(fields) query.select(fields.split(','))
        if(orderBy) query.sort({[orderBy]: sortBy})


        return query.exec()
    },
}