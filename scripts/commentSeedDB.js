

const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/route420"
);

/*
Ryan
5d47260d7ffa622eb84ae7b2

Matt	
5d47260d7ffa622eb84ae7b3

Isabella
5d47260d7ffa622eb84ae7b4

Jared
5d47260d7ffa622eb84ae7b5
*/

/*
STORE ID	STORE	LOCATION ID
5d474e210953e00dbc14734e	The Hemp Store NC	5d471e82fce97c3cf0b7d0d8
5d474e210953e00dbc14734f	The Hemp Store Chapel Hill	5d471e82fce97c3cf0b7d0d9
5d474e210953e00dbc147350	The Hemp Store Wake Forest	5d471e82fce97c3cf0b7d0da
5d474e210953e00dbc147351	Smoke & Talk	5d471e82fce97c3cf0b7d0d8
5d474e210953e00dbc147352	Your CBD Store	5d471e82fce97c3cf0b7d0dd
5d474e210953e00dbc147353	Your CBD Store - Wake Forest	5d471e82fce97c3cf0b7d0da
5d474e210953e00dbc147354	Misty Mountain Vapors - Vape & CBD	5d471e82fce97c3cf0b7d0d8
5d474e210953e00dbc147355	HempKo	5d471e82fce97c3cf0b7d0dd
5d474e210953e00dbc147356	The Hemptender Dispensary	5d471e82fce97c3cf0b7d0db
5d474e210953e00dbc147357	The Hemp Boutique of Cary	5d471e82fce97c3cf0b7d0de
5d474e210953e00dbc147358	The Hemp Farmacy	5d471e82fce97c3cf0b7d0d8
5d474e210953e00dbc147359	Hemp Times Inc	5d471e82fce97c3cf0b7d0d8
5d474e210953e00dbc14735a	Nature's Releaf Hemp Store	5d471e82fce97c3cf0b7d0d8
5d474e210953e00dbc14735b	Good Guy Vapes	5d471e82fce97c3cf0b7d0dc
5d474e210953e00dbc14735c	DailyVita	5d471e82fce97c3cf0b7d0dd
*/

var curDate = new Date(Date.now());
// new Date('2019-08-05T12:32:00');

const commentSeed = [
    {
    comment: "Hot box at 4:20 the fatty dank endo doobie in a cashed roachclip, Bogart.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b2",
    storeID: "5d474e210953e00dbc14734e"
    },
    {
    comment: "Wake and bake indica hash at the dispensary in Oregon decriminalized.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b3",
    storeID: "5d474e210953e00dbc14734f"
    },
    {
    comment: "Crystalized buds from trimming tasty weed pens THC sativa euphoric resinated dome piece.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b4",
    storeID: "5d474e210953e00dbc147350"
    },
    {
    comment: "California kush roll it up into a fat blunt for medicinal purposes to elevate your consciousness.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b5",
    storeID: "5d474e210953e00dbc147351"
    },
    {
    comment: "Guatemalan purple haze grown outdoors by ganja shaman.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b4",
    storeID: "5d474e210953e00dbc147352"
    },
    {
    comment: "Legalize spliffs for recreational Snoop Dogg edibles pusher cannabidiol cartoons.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b3",
    storeID: "5d474e210953e00dbc147353"
    },
    {
    comment: "Littering and butter stuff more cerebral high couch lock Abba Zabba you my only friend.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b2",
    storeID: "5d474e210953e00dbc147354"
    },
    {
    comment: "Pass the duchie Bob Marley this shatter is hella potent.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b3",
    storeID: "5d474e210953e00dbc147355"
    },
    {
    comment: "Rolling down the street smoking endo, laid back. Have you ever tried Lorem Ipsum on Weeeeeeeeeeed?",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b4",
    storeID: "5d474e210953e00dbc147356"
    },
    {
    comment: "Indica is like ‘in da couch’ like straight couch lock chasing waterfalls and milkers straight to your dome.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b5",
    storeID: "5d474e210953e00dbc147357"
    },
    {
    comment: "French inhale topical CBD lotion and binge watch Cheech and Chong.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b4",
    storeID: "5d474e210953e00dbc147358"
    },
    {
    comment: "Extremely dope chronic eye drops in the basement with psychedellic nugs.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b3",
    storeID: "5d474e210953e00dbc147359"
    },
    {
    comment: "Toke up on the Pineapple Express with that sticky icky shotgun sensamillia.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b2",
    storeID: "5d474e210953e00dbc14735a"
    },
    {
    comment: "Just give us the whizzaa!",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b3",
    storeID: "5d474e210953e00dbc14735b"
    },
    {
    comment: "Make a quick pipe out of an apple and release the carb Purple Haze all around.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b4",
    storeID: "5d474e210953e00dbc14735c"
    },
    {
    comment: "Rasta! Fully man, keif gummies are the indoor equivalent of body high super mellow.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b5",
    storeID: "5d474e210953e00dbc14734e"
    },
    {
    comment: "Dude you’re just being paranoid, don’t call the cops.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b4",
    storeID: "5d474e210953e00dbc14734f"
    },
    {
    comment: "OG grandaddy purps with notes of diesel.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b5",
    storeID: "5d474e210953e00dbc147350"
    },
    {
    comment: "Hydroponic nacho pop-tarts tetrahydrocannabinol hybrid schwag stems and seeds little orange hairs.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b2",
    storeID: "5d474e210953e00dbc147351"
    },
    {
    comment: "The cannabis industry will gravity bong a cotton mouth pizza dipped in ranch.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b3",
    storeID: "5d474e210953e00dbc147352"
    },
    {
    comment: "Broccoli bong butterfly gateway drugs to elevate your good vibrations.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b4",
    storeID: "5d474e210953e00dbc147353"
    },
    {
    comment: "Taco Bell 4th meal with Doritos Locos tacos and a knife rip on the side.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b5",
    storeID: "5d474e210953e00dbc147354"
    },
    {
    comment: "Optimizing dime bags of pre-rolled honey oil dabs.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b2",
    storeID: "5d474e210953e00dbc147355"
    },
    {
    comment: "Hot box at 4:20 the fatty dank endo doobie in a cashed roachclip, Bogart.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b3",
    storeID: "5d474e210953e00dbc147356"
    },
    {
    comment: "Wake and bake indica hash at the dispensary in Oregon decriminalized.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b4",
    storeID: "5d474e210953e00dbc147357"
    },
    {
    comment: "Crystalized buds from trimming tasty weed pens THC sativa euphoric resinated dome piece.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b5",
    storeID: "5d474e210953e00dbc147358"
    },
    {
    comment: "California kush roll it up into a fat blunt for medicinal purposes to elevate your consciousness.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b4",
    storeID: "5d474e210953e00dbc147359"
    },
    {
    comment: "Guatemalan purple haze grown outdoors by ganja shaman.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b3",
    storeID: "5d474e210953e00dbc14735a"
    },
    {
    comment: "Legalize spliffs for recreational Snoop Dogg edibles pusher cannabidiol cartoons.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b2",
    storeID: "5d474e210953e00dbc14735b"
    },
    {
    comment: "Littering and butter stuff more cerebral high couch lock Abba Zabba you my only friend.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b3",
    storeID: "5d474e210953e00dbc14735c"
    },
    {
    comment: "Pass the duchie Bob Marley this shatter is hella potent.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b4",
    storeID: "5d474e210953e00dbc14734e"
    },
    {
    comment: "Rolling down the street smoking endo, laid back. Have you ever tried Lorem Ipsum on Weeeeeeeeeeed?",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b5",
    storeID: "5d474e210953e00dbc14734f"
    },
    {
    comment: "Indica is like ‘in da couch’ like straight couch lock chasing waterfalls and milkers straight to your dome.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b4",
    storeID: "5d474e210953e00dbc147350"
    },
    {
    comment: "French inhale topical CBD lotion and binge watch Cheech and Chong.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b3",
    storeID: "5d474e210953e00dbc147351"
    },
    {
    comment: "Extremely dope chronic eye drops in the basement with psychedellic nugs.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b2",
    storeID: "5d474e210953e00dbc147352"
    },
    {
    comment: "Toke up on the Pineapple Express with that sticky icky shotgun sensamillia.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b3",
    storeID: "5d474e210953e00dbc147353"
    },
    {
    comment: "Just give us the whizzaa!",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b3",
    storeID: "5d474e210953e00dbc147354"
    },
    {
    comment: "Make a quick pipe out of an apple and release the carb Purple Haze all around.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b4",
    storeID: "5d474e210953e00dbc147355"
    },
    {
    comment: "Rasta! Fully man, keif gummies are the indoor equivalent of body high super mellow.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b5",
    storeID: "5d474e210953e00dbc147356"
    },
    {
    comment: "Dude you’re just being paranoid, don’t call the cops.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b4",
    storeID: "5d474e210953e00dbc147357"
    },
    {
    comment: "OG grandaddy purps with notes of diesel.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b3",
    storeID: "5d474e210953e00dbc147358"
    },
    {
    comment: "Hydroponic nacho pop-tarts tetrahydrocannabinol hybrid schwag stems and seeds little orange hairs.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b2",
    storeID: "5d474e210953e00dbc147359"
    },
    {
    comment: "The cannabis industry will gravity bong a cotton mouth pizza dipped in ranch.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b3",
    storeID: "5d474e210953e00dbc14735a"
    },
    {
    comment: "Broccoli bong butterfly gateway drugs to elevate your good vibrations.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b4",
    storeID: "5d474e210953e00dbc14735b"
    },
    {
    comment: "Taco Bell 4th meal with Doritos Locos tacos and a knife rip on the side.",
    created: curDate,
    updated: curDate,
    userID: "5d47260d7ffa622eb84ae7b5",
    storeID: "5d474e210953e00dbc14735c"
    }
];


db.StoreComment
    .remove({})
    .then(() => db.StoreComment.collection.insertMany(commentSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });