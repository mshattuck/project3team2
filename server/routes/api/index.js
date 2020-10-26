const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users");

router.use("/books", bookRoutes);
router.use("/user", userRoutes);

module.exports = router;
