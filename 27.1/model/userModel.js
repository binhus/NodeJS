const connectionMySQL = require('../services/connectionMySQL');

const serialize = (userData) => ({
  firstName: userData.first_name,
  lastName: userData.last_name,
  email: userData.email,
  password: userData.password,
});

const addUser = (userData) => {
  console.log(userData);
  const { firstName, lastName, email, password } = userData;
  return connectionMySQL
    .execute(
      'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
      [firstName, lastName, email, password],
    )
    .then(([result]) => ({
      id: result.insertId,
      firstName,
      lastName,
      email,
      password,
    }));
};

const getAllUsers = () =>
  connectionMySQL.execute('SELECT * FROM users;').then(([results]) => results);

const getUserById = (id) =>
  connectionMySQL
    .execute('SELECT * FROM users WHERE id = ?', [id])
    .then(([[user]]) => user || null);

const updateUser = ({ firstName, lastName, email, password }, id) =>
  connectionMySQL.execute(
    'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?',
    [firstName, lastName, email, password, id],
  );

const deleteUserById = (id) =>
  connectionMySQL.execute('DELETE FROM users WHERE id = ?', [id]);

module.exports = {
  addUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUserById,
};
