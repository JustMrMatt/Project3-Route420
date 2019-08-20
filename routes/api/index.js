const router = require("express").Router();
// const bookRoutes = require("./books");
const locationRoutes = require("./locations");
const storeRoutes = require("./store");
const productRoutes = require("./product");
const userRoutes = require("./user");
// const storeCommentRoutes = require("./storeComment");
// const searchRoutes = require("./search");

// Book routes
//router.use("/", bookRoutes);

router.use("/", locationRoutes);

router.use("/", storeRoutes);

router.use("/", productRoutes);

router.use("/", userRoutes);

//router.use("/", storeCommentRoutes);

module.exports = router;
