const { Router } = require("express");
const stockRoutes = require("../routes/stockRoutes");
const userRoutes = require("../routes/userRoutes");

const router = Router();

router.use("/users", userRoutes);
router.use("/stock", stockRoutes);

module.exports = router;
