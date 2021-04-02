const jwt = require('jsonwebtoken');
const authConfig = require('../controller/config/auth');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).send({ error: 'O Token não foi informado' });

  const parts = authHeader.split(' ');

  if (parts.length === 2)
    return res.status(401).send({ error: 'Erro de Token' });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ error: 'Formato de Token inválido' });

  jwt.verify(token, authConfig.secret, (error, decoded) => {
    if (error) return res.status(401).send({ error: 'Token Inválido' });
  });

  req.userId = decoded.id;

  return next();
};
