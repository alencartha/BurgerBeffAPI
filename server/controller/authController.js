const dataBase = require('../db/models');
const jwt = require('jsonwebtoken');
const authConfig = require('./config/auth');

const postAuth = async (req, res) => {
  const { email, password } = req.body;
  const userInfo = await dataBase.Users.findOne({
    where: { email: email },
    where: { password: password },
  });

  if (!userInfo) {
    return res.status(400).send({
      error:
        'Não foi possível validar dados de usuário. Tente digitar os dados novamente',
    });
  }

  userInfo.password = undefined;
  const token = jwt.sign({ id: userInfo.id }, authConfig.secret, {
    expiresIn: 86400,
  });
  res.send({ userInfo, token });
};

module.exports = { postAuth };
