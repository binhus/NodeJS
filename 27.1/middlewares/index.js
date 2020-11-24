const emailRegex = /[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
const passwordRegex = /^(\d|\w){6,}$/;
const nameRegex = /[a-z]{3,}/i;

const invalidData = (res) =>
  res.status(200).send({ message: 'Dados inválidos' });

const dataValidator = (req, res, next) => {
  switch (true) {
    case !emailRegex.test(req.body.email) ||
      !nameRegex.test(req.body.firstName) ||
      !nameRegex.test(req.body.lastName) ||
      !passwordRegex.test(req.body.password):
      return invalidData(res);
    default:
      next();
  }
};

module.exports = {
  dataValidator,
};
