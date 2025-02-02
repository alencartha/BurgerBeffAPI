const dataBase = require('../db/models');
const jwt = require('jsonwebtoken');
const authConfig = require('../controller/config/auth.json');

const getUsers = (req, res) => {
  dataBase.Users.findAll({
    attributes: {
      exclude: ['password'],
    },
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.status(400).json({
        message: 'Não foi possível processar a operação',
      })
    );
};

const getUserById = (req, res) => {
  dataBase.Users.findAll({
    attributes: {
      exclude: ['password'],
    },
    where: { id: req.params.uid },
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.status(400).json({
        message: 'Não foi possível processar a operação',
      })
    );
};

const postUser = (req, res) => {
  const { name, email, password, role, restaurant } = req.body;
  dataBase.Users.create({
    name,
    email,
    password,
    role,
    restaurant,
  })
    .then((user) => {
      const token = jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: 86400,
      });
      res.status(201).send({ 'usuário criado': user, token });
    })
    .catch(() =>
      res.status(400).json({
        message: 'Não foi possível processar a operação',
      })
    );
};

const updateUser = (req, res) => {
  const { name, email, password, role, restaurant } = req.body;
  dataBase.Users.update(
    {
      name,
      email,
      password,
      role,
      restaurant,
    },
    { where: { id: req.params.uid } }
  )
    .then(() => {
      res.status(200).json({
        message: 'Dados de usuário atualizados com sucesso!',
      });
    })
    .catch(() =>
      res.status(400).json({
        message: 'Não foi possível processar a operação',
      })
    );
};

const deleteUser = (req, res) => {
  dataBase.Users.destroy({ where: { id: req.params.uid } })
    .then(() => {
      res.status(200).json({
        message: 'Usuário deletado',
      });
    })
    .catch(() =>
      res.status(400).json({
        message: 'Não foi possível processar a operação',
      })
    );
};

module.exports = {
  getUsers,
  getUserById,
  postUser,
  updateUser,
  deleteUser,
};
