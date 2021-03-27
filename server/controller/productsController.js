//RETORNA TODOS OS PRODUTOS
const getProducts = (req, res) => {
    res.status(200).send({
      message: "Retorna os produtos",
    });
  };
  
  //LOCALIZA PRODUTO POR ID
  const getProductById = (req, res) => {
    const id = req.params.id_order;
    res.status(200).send({
      message: "Detalhe do produto, por id",
      id: id,
    });
  };
  
  //INSERE UM PRODUTO
  const postProduct = (req, res) => {
    const product = {
      id_produto: req.body.id_produto,
      quantidade: req.body.quantidade,
    };
    res.status(201).send({
      message: "Produto criado",
      produtoCriado: product,
    });
  };
  
  //ALTERA UM PRODUTO
  const updateProduct = (req, res) => {
    const product = {
      id_produto: req.body.id_produto,
      quantidade: req.body.quantidade,
    };
    res.status(201).send({
      message: "Produto alterado",
      produtoAlterado: product,
    });
  };
  
  //DELETA UM PRODUTO
  const deleteProduct = (req, res) => {
    res.status(201).send({
      message: "Excluir o pedido",
    });
  };
  
  module.exports = {
    getProducts,
    getProductById,
    postProduct,
    updateProduct,
    deleteProduct,
  };
  