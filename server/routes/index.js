const { Router } = require('express');
const usersRouter = require('./users');
const productsRouter = require('./products');
const ordersRouter = require('./orders');
const authRouter = require('./auth');
const morgan = require('morgan');

const router = Router();

router.use(morgan('dev'));

router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/orders', ordersRouter);
router.use('/auth', authRouter);

router.use((req, res, next) => {
  const erro = new Error(
    'Bem vindo(a) à API Burger Beef. Digite o endpoint desejado e o método para consumir nossa API!'
  );
  erro.status = 404;
  next(erro);
});

router.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
   mensagem: {
      apiBurgerBeff_Informa: error.message,
    },
  });
});

module.exports = router;
