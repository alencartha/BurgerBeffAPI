const { where } = require("sequelize");
const dataBase = require("../db/models");

//RETORNA TODOS OS PRODUTOS
const getProducts = (req, res) => {
  dataBase.Products.findAll()
    .then((result) => {
      res.status(200).json(result);
      connection.end();
    })
    .catch(() =>
      res.json({
        message: "Não foi possível processar a operação",
      })
    );
};

//LOCALIZA PRODUTO POR ID
const getProductById = (req, res) => {
  dataBase.Products.findAll({ where: { id: req.params.productid } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.json({
        message: "Não foi possível processar a operação",
      })
    );
};

//INSERE UM PRODUTO
const postProduct = (req, res) => {
  const { name, price, flavor, complement, image, type, sub_type } = req.body;
  dataBase.Products.create({
    name,
    price,
    flavor,
    complement,
    image,
    type,
    sub_type,
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

//ALTERA UM PRODUTO
const updateProduct = (req, res) => {
  const { name, price, flavor, complement, image, type, sub_type } = req.body;
  dataBase.Products.update(
    {
      name,
      price,
      flavor,
      complement,
      image,
      type,
      sub_type,
    },
    { where: { id: req.params.productid } }
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

//DELETAR UM PRODUTO
const deleteProduct = (req, res) => {
  dataBase.Products.destroy({ where: { id: req.params.productid } })
    .then(() => {
      res.status(200).json({
        message: "Produto excluído com sucesso!",
      });
    })
    .catch(() => {
      res.json({
        message: "Não foi possível processar a operação",
      });
    });
};
module.exports = {
  getProducts,
  getProductById,
  postProduct,
  updateProduct,
  deleteProduct,
};
