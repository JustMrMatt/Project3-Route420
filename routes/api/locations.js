const router = require("express").Router();
const dbController = require("../../controllers/dbController");

// const dbController = require("../../controllers/dbController");

// Matches with "/api/books"
router.route("/locations").get(dbController.findAllLocations);

// Matches with "/api/books/:id"
/*router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);*/

module.exports = router;