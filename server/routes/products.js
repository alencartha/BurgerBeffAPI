const { Router } = require('express');
const productController = require('../controller/productsController');
const authMiddleware = require('../middlewares/auth');

const router = Router();

router.use(authMiddleware);

router.get('/', productController.getProducts);
router.get('/:productid', productController.getProductById);
router.post('/', productController.postProduct);
router.put('/:productid', productController.updateProduct);
router.delete('/:productid', productController.deleteProduct);

module.exports = router;
