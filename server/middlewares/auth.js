const jwt = require('jsonwebtoken');
const authConfig = require('../controller/config/auth.json');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader;

  if (!authHeader) return res.status(401).send({ error: 'Informe seu Token' });

  jwt.verify(token, authConfig.secret, (error) => {
    if (error) return res.status(401).send({ error: 'Token Inválido' });
  });

  return next();
};
