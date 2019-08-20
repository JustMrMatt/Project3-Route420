const db = require("../models");

/*
db.User
  - find 1
db.Location
  - find all
db.Store
  - find 1
db.Product
  - find 1
db.StoreComment
  - find all
*/

// Defining methods for the booksController
module.exports = {
  findAllLocations: function(req, res) {
    db.Location
      .find(req.query)
      .populate("stores")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  loginUser: function(req, res) {
    var creds = req.params.credentials.split("+");
    db.User
      .findOne({'email': creds[0], 'password': creds[1]})
      .populate("storecomments")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUserById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findStoreById: function(req, res) {
    // https://stackoverflow.com/questions/21069813/mongoose-multiple-query-populate-in-a-single-call
    var populateQuery = [
      {path:'products', select:'_id name brand'}, 
        { path:'storecomments', 
          //populate: { path: 'user' }
          select:'user comment updated created'
        }
      ];

    // sort populate: https://stackoverflow.com/questions/16352768/how-to-sort-a-populated-document-in-find-request

    db.Store
      .findById(req.params.id)
      .populate(populateQuery)
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  findProductById: function(req, res) {
    db.Product
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findProductByName: function(req, res){
    // https://medium.com/@erparshantarora/partial-text-search-vs-full-text-search-in-mongoose-7e04f7bd0783
    console.log("(controllers/dbController.js) findProductByName: " + req.params.terms);
    //req.params.terms: find + and replace with space
    var reformatTerms = req.params.terms.split('+').join(' ').trim();
    console.log("(controllers/dbController.js) reformatTerms: " + reformatTerms);
    //https://docs.mongodb.com/manual/reference/operator/aggregation/match/
    //var regexStr = "/"+reformatTerms+"/";
    db.Product
      //.find({name: reformatTerms})
      .aggregate([{
        $match: {
          name: {
            $regex: reformatTerms,
            $options: 'i'// case insensitive (https://docs.mongodb.com/manual/reference/operator/query/regex/#op._S_regex)
          }
        }
      }])
      //.find(req.params.terms)
      // .findOne({'email': creds[0], 'password': creds[1]})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // findProductByBrand
  // findProductByTag
  findStoreCommentsByUser: function(req, res) {
    db.StoreComment
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createStoreComment: function(req, res) {
    console.log("(controllers/dbController.js) createStoreComment: ", req.body);
    db.StoreComment
      .create(req.body)
      .then(dbModel => {
        //console.log("dbModel:", dbModel)
        // add comment ref to store
        db.Store.findByIdAndUpdate(dbModel.store,
        { "$push": { "storecomments": dbModel._id }}).then(store => 
            {
              //console.log("*** comment to store:", store)
              // add cooment ref to user
              db.User.findByIdAndUpdate(dbModel.user,
              { "$push": { "storecomments": dbModel._id }}).then(user =>   {
                  //console.log("*** comment to user:", user)
                });
            });
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  removeStoreComment: function(req, res) {
    console.log("(controllers/dbController.js) removeStoreComment: ", req.params.id);
    
    db.StoreComment
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateStoreComment: function(req, res) {
    db.StoreComment
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
