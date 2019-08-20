const router = require("express").Router();
const dbController = require("../../controllers/dbController");

// const dbController = require("../../controllers/dbController");

// Matches with "/api/books"
router.route("/store/:id").get(dbController.findStoreById);

// Matches with "/api/books"
router
  .route("/store/storeComment")
  .post(dbController.createStoreComment);

router
  .route("/store/storeComment/:id")
  .delete(dbController.removeStoreComment)

// Matches with "/api/books/:id"
/*router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);*/

module.exports = router;