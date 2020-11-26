
const mysqlx = require('@mysql/xdevapi');
require('dotenv/config');


const config = {
  user: process.env.MYSQL_USER, // Substitua pelo usuário que usa para conectar ao banco na sua máquina, `root` normalmente.
  password: process.env.MYSQL_PASSWORD, // Sua senha.
  host: process.env.HOSTNAME, // Seu host, `localhost` é o comum.
  port: 33060,
  socketPath: '/var/run/mysqld/mysqld.sock',
};

let schema;

const connect = async () => {
  if (schema) return Promise.resolve(schema);
  try {
    const session = await mysqlx.getSession(config);
    schema = await session.getSchema('rest_exercicios');
    return schema;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};
module.exports = connect;