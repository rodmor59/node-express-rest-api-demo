const mongoose = require('mongoose')

//Console log messages
const msgScsDBConnect = 'connected to DB'
const msgErrDBConnect = 'Database connection error'

//Connect to the database. URI is configured in the .env file
mongoose.connect(process.env.DB_URI)

mongoose.connection.on('connected', () => {
    console.log(msgScsDBConnect)
})

mongoose.connection.on('error', (error) => {
    console.log(msgErrDBConnect)
    console.log('')
    console.log(error)
})

// Register DB Models (MongoDB)
require('../models/user')
