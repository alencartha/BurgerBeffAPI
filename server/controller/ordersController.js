const dataBase = require("../db/models");

//RETORNA TODOS OS PEDIDOS
const getOrders = (req, res) => {
  dataBase.Orders.findAll()
    .then((result) => {
      res.status(200).json(result);
      connection.end();
    })
    .catch(() =>
      res.status(400).json({
        message: "Não foi possível processar a operação",
      })
    );
};

//LOCALIZA PEDIDO POR ID
const getOrderById = (req, res) => {
  dataBase.Orders.findAll({ where: { id: req.params.orderId } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.status(400).json({
        message: "Não foi possível processar a operação",
      })
    );
};

//INSERE UM PEDIDO
const postOrder = (req, res) => {
  const { user_id, client_name, table, status } = req.body;
  dataBase.Orders.create({
    user_id,
    client_name,
    table,
    status,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() =>
      res.status(400).json({
        message: "Não foi possível processar a operação",
      })
    );
};

//ALTERA UM PEDIDO
const updateOrder = (req, res) => {
  const { user_id, client_name, table, status } = req.body;
  dataBase.Orders.update(
    {
      user_id,
      client_name,
      table,
      status,
    },
    { where: { id: req.params.orderId } }
  )
    .then(() => {
      res.status(200).json({
        message: "Pedido atualizado com sucesso!",
      });
    })
    .catch(() =>
      res.status(400).json({
        message: "Não foi possível processar a operação",
      })
    );
};

//DELETA UM PEDIDO
const deleteOrder = (req, res) => {
  dataBase.Orders.destroy({ where: { id: req.params.orderId } })
    .then(() => {
      res.status(200).json({
        message: "Pedido excluído",
      });
    })
    .catch(() =>
      res.status(400).json({
        message: "Não foi possível processar a operação",
      })
    );
};

module.exports = {
  getOrders,
  getOrderById,
  postOrder,
  updateOrder,
  deleteOrder,
};
