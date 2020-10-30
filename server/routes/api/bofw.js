const router = require("express").Router();
const booksController = require("../../controllers/bookofWeek");

router.route("/BookofWeek")
  .get(booksController.GetBookofWeek);

module.exports = router;