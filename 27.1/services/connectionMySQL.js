const mySQL = require('mysql2/promise');

module.exports = mySQL.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'users_crud',
});

