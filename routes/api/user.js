const router = require("express").Router();
//const booksController = require("../../controllers/booksController");
const dbController = require("../../controllers/dbController");

// Matches with "/api/books"
/* router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);
*/

// Matches with "/api/books/:id"
router
  .route("/user/:credentials")
  .get(dbController.loginUser);

router
  .route("/user/storeComment/:id")
  .delete(dbController.removeStoreComment)

/*router
  .route("/user/:id")
  .get(dbController.findById);
  //.put(booksController.update)
  //.delete(booksController.remove);
*/


module.exports = router;
