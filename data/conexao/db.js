const db = require('knex')({
    client:'pg',
    connection:{
        host:'localhost',
        password:'thewindisblowing',
        database:'northwind',
        user:'postgres',
        port:'5432'
    }

})

module.exports = {
    db
}