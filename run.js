const { Client } = require('pg')
const client = new Client({
 user: 'runner',
 host: 'postgres',
 database: 'testdb',
 password: 'hideme'
})
client.connect()
client.query('SELECT NOW()', (err, result) => {
 if (err) throw err;
 console.log(result)
 client.end()
})
