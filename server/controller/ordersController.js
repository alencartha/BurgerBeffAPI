const dataBase = require('../db/models');

const getOrders = (req, res) => {
  dataBase.Orders.findAll({
    include: [
      {
        model: dataBase.Products,
        as: 'Products',
        required: false,
        attributes: [
          'id',
          'name',
          'price',
          'flavor',
          'complement',
          'image',
          'type',
          'sub_type',
        ],
        through: {
          model: dataBase.ProductsOrders,
          as: 'ProductsOrders',
          attributes: ['amount'],
        },
      },
    ],
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

const getOrderById = (req, res) => {
  dataBase.Orders.findAll({
    include: [
      {
        model: dataBase.Products,
        as: 'Products',
        required: false,
        attributes: [
          'id',
          'name',
          'price',
          'flavor',
          'complement',
          'image',
          'type',
          'sub_type',
        ],
        through: {
          model: dataBase.ProductsOrders,
          as: 'ProductsOrders',
          attributes: ['amount'],
        },
        where: { id: req.params.orderId },
      },
    ],
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

const postOrder = (req, res) => {
  const { user_id, client_name, table, status, processedAt } = req.body;
  dataBase.Orders.create({
    user_id,
    client_name,
    table,
    status,
    processedAt,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() =>
      res.status(400).json({
        message: 'Não foi possível processar a operação',
      })
    );
};

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
        message: 'Pedido atualizado com sucesso!',
      });
    })
    .catch(() =>
      res.status(400).json({
        message: 'Não foi possível processar a operação',
      })
    );
};

const deleteOrder = (req, res) => {
  dataBase.Orders.destroy({ where: { id: req.params.orderId } })
    .then(() => {
      res.status(200).json({
        message: 'Pedido excluído',
      });
    })
    .catch(() =>
      res.status(400).json({
        message: 'Não foi possível processar a operação',
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
