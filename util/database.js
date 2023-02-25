/* This code exports a MySQL connection pool using the mysql2 module. It first requires the 'mysql2' module and also requires a configuration file named 'config.json'.
Then, it creates a connection pool using the mysql2.createPool() method and passes the configuration properties to it. The created pool object has a promise() method which makes the pool object Promise-based so that it can be used with async/await syntax.
Finally, the created pool object is exported so that it can be used to query the database. 
25/02/2023 Indika Sirimanna*/
const mysql = require('mysql2');

const config = require('../config/config.json');

const pool = mysql.createPool({
    host: config.host,
    user: config.user,
    database : config.database,
    password : config.password ,
});

module.exports = pool.promise();