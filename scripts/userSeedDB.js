const mongoose = require("mongoose");
const db = require("../models");

// This file empties the collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/route420"
);

/*
Ryan	Test	ryan@dankcity.com	welcome1	
5d47260d7ffa622eb84ae7b2

Matt	Test	matt@dankcity.com	welcome2	
5d47260d7ffa622eb84ae7b3

Isabella	Test	bella@dankcity.com	welcome3	
5d47260d7ffa622eb84ae7b4

Jared	Test	jared@dankcity.com	welcome4	
5d47260d7ffa622eb84ae7b5
*/

const userSeed = [
    {
        firstName: "Ryan",
        lastName: "Test",
        email: "ryan@dankcity.com",
        password: "welcome1",
        comments: []
    },
    {
        firstName: "Matt",
        lastName: "Test",
        email: "matt@dankcity.com",
        password: "welcome2",
        comments: []
    },
    {
        firstName: "Isabella",
        lastName: "Test",
        email: "bella@dankcity.com",
        password: "welcome3",
        comments: []
    },
    {
        firstName: "Jared",
        lastName: "Test",
        email: "jared@dankcity.com",
        password: "welcome4",
        comments: []
    }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



