var mysql = require('mysql');
const util = require('util')

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'banvemaybay'
});
const query = util.promisify(conn.query).bind(conn)
module.exports = query