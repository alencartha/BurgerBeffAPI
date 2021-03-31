const dataBase = require("../db/models");

//RETORNA TODOS OS USUÁRIOS
const getUsers = (req, res) => {
  dataBase.Users.findAll({
    attributes: {
      exclude: ["password"],
    },
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.json({
        message: "Não foi possível processar a operação",
      })
    );
};

//LOCALIZA USUÁRIO POR ID
const getUserById = (req, res) => {
  dataBase.Users.findAll({
    attributes: {
      exclude: ["password"],
    },
    where: { id: req.params.uid },
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.json({
        message: "Não foi possível processar a operação",
      })
    );
};

//INSERE UM USUÁRIO
const postUser = (req, res) => {
  const { name, email, password, role, restaurant } = req.body;
  dataBase.Users.create({
    name,
    email,
    password,
    role,
    restaurant,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() =>
      res.json({
        message: "Não foi possível processar a operação",
      })
    );
};

//ALTERA DADOS DE USUÁRIO
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
        message: "Dados de usuário atualizados com sucesso!",
      });
    })
    .catch(() => {
      res.json({
        message: "Não foi possível processar a operação",
      });
    });
};

//DELETA UM USUÁRIO
const deleteUser = (req, res) => {
  dataBase.Users.destroy({ where: { id: req.params.uid } })
    .then(() => {
      res.status(200).json({
        message: "Usuário deletado",
      });
    })
    .catch(() => {
      res.json({
        message: "Não foi possível processar a operação",
      });
    });
};

module.exports = { getUsers, getUserById, postUser, updateUser, deleteUser };
