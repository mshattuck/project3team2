const router = require("express").Router();
const bookofWeek = require("../../controllers/bookofWeek");
const { route } = require("./bofw");
const bookRoutes = require("./books");
const userRoutes = require("./users");
const bookofWeekRoutes = require("./bofw");

router.use("/books", bookRoutes);
router.use("/user", userRoutes);
router.use("/bofw", bookofWeekRoutes);

module.exports = router;
