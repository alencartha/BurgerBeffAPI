const { Router } = require("express");
const ordersController = require("../controller/ordersController");

const router = Router();

router.get("/", ordersController.getOrders);
router.get("/:orderId", ordersController.getOrderById);
router.post("/", ordersController.postOrder);
router.put("/:orderId", ordersController.updateOrder);
router.delete("/:orderId", ordersController.deleteOrder);

module.exports = router;
