const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/route420"
);

/*
city:	Raleigh         5d471e82fce97c3cf0b7d0d8	
city:	Chapel Hill     5d471e82fce97c3cf0b7d0d9	
city:	Wake Forest     5d471e82fce97c3cf0b7d0da	
city:	Durham          5d471e82fce97c3cf0b7d0db	
city:	Morrisville     5d471e82fce97c3cf0b7d0dc	
city:	Apex	        5d471e82fce97c3cf0b7d0dd	
city:	Cary	        5d471e82fce97c3cf0b7d0de
*/

const locationSeed = [
  {
    city:	"Raleigh",
    state:	"NC",
    stores: []
  },
  {
    city:	"Chapel Hill",
    state:	"NC",
    stores: []
  },
  {
    city:	"Wake Forest",
    state:	"NC",
    stores: []
  },
  {
    city:	"Durham",
    state:	"NC",
    stores: []
  },
  {
    city:	"Morrisville",
    state:	"NC",
    stores: []
  },
  {
    city:	"Apex",
    state:	"NC",
    stores: []
  },
  {
    city:	"Cary",
    state:	"NC",
    stores: []
  }
];

db.Location
  .remove({})
  .then(() => db.Location.collection.insertMany(locationSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


