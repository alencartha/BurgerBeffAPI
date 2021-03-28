const { Router } = require("express");
const usersRouter = require("./users");
const productsRouter = require("./products");
const ordersRouter = require("./orders");
const morgan = require("morgan");

const router = Router();

router.use(morgan("dev"));

router.use("/users", usersRouter);
router.use("/products", productsRouter);
router.use("/orders", ordersRouter);

//QUANDO NÃO ENCONTRAR A ROTA
router.use((req, res, next) => {
  const erro = new Error("Rota não encontrada");
  erro.status = 404;
  next(erro);
});

router.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      mensagem: error.message,
    },
  });
});

module.exports = router;
