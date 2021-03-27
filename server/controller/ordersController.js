//RETORNA TODOS OS PEDIDOS
const getOrders = (req, res) => {
    res.status(200).send({
      message: "Retorna os pedidos",
    });
  };
  
  //LOCALIZA PEDIDO POR ID
  const getOrderById = (req, res) => {
    const id = req.params.id_order;
    res.status(200).send({
      message: "Detalhe do pedido, por id",
      id: id,
    });
  };
  
  //INSERE UM PEDIDO
  const postOrder = (req, res) => {
    const order = {
      id_produto: req.body.id_produto,
      quantidade: req.body.quantidade,
    };
    res.status(201).send({
      message: "Pedido criado",
      pedidoCriado: order,
    });
  };
  
  //ALTERA UM PEDIDO
  const updateOrder = (req, res) => {
    const order = {
      id_produto: req.body.id_produto,
      quantidade: req.body.quantidade,
    };
    res.status(201).send({
      message: "Pedido alterado",
      pedidoCriado: order,
    });
  };
  
  //DELETA UM PEDIDO
  const deleteOrder = (req, res) => {
    res.status(201).send({
      message: "Excluir o pedido",
    });
  };
  
  module.exports = {
    getOrders,
    getOrderById,
    postOrder,
    updateOrder,
    deleteOrder,
  };
  