const {connect} = require('mongoose')
const MONGODB_URL = process.env.DATABASE

const connectToDB = () => {
    const dbOptions = {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    }

    return connect(MONGODB_URL, dbOptions)
}

module.exports = connectToDB