const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/route420"
);

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

const productSeed = [
    {
        name: "Hempzilla CBD",
        description: "Hot box at 4:20 the fatty dank endo doobie in a cashed roachclip, Bogart. Wake and bake indica hash at the dispensary in Oregon decriminalized. Crystalized buds from trimming tasty weed pens THC sativa euphoric resinated dome piece. California kush roll it up into a fat blunt for medicinal purposes to elevate your consciousness. Guatemalan purple haze grown outdoors by ganja shaman.",
        brand: "Hempzilla",
        type: ["oil"],
        storeID: "5d474e210953e00dbc14735b"
    },
    {   
        name: "Dinner Lady CBD",
        description: "Legalize spliffs for recreational Snoop Dogg edibles pusher cannabidiol cartoons. Littering and butter stuff more cerebral high couch lock Abba Zabba you my only friend. Pass the duchie Bob Marley this shatter is hella potent. Rolling down the street smoking endo, laid back. Have you ever tried Lorem Ipsum on Weeeeeeeeeeed?",
        brand: "Dinner Lady",
        type: ["oil"],
        storeID: "5d474e210953e00dbc14735b"
    },
    {
        name: "Ancient Nutrition CBD",
        description: "Indica is like ‘in da couch’ like straight couch lock chasing waterfalls and milkers straight to your dome. French inhale topical CBD lotion and binge watch Cheech and Chong. Extremely dope chronic eye drops in the basement with psychedellic nugs. Toke up on the Pineapple Express with that sticky icky shotgun sensamillia. Just give us the whizzaa!",
        brand: "Ancient Nutrition",
        type: ["oil"],
        storeID: "5d474e210953e00dbc14735c"
    },
    {
        name: "Fountain of Health CBD",
        description: "Make a quick pipe out of an apple and release the carb Purple Haze all around. Rasta! Fully man, keif gummies are the indoor equivalent of body high super mellow. Dude you’re just being paranoid, don’t call the cops. OG grandaddy purps with notes of diesel.",
        brand: "Fountain of Youth",
        type: ["oil"],
        storeID: "5d474e210953e00dbc14735c"
    },
    {
        name: "SunMed CBD",
        description: "Hydroponic nacho pop-tarts tetrahydrocannabinol hybrid schwag stems and seeds little orange hairs. The cannabis industry will gravity bong a cotton mouth pizza dipped in ranch. Broccoli bong butterfly gateway drugs to elevate your good vibrations. Taco Bell 4th meal with Doritos Locos tacos and a knife rip on the side. Optimizing dime bags of pre-rolled honey oil dabs.",
        brand: "SunMed",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147352"
    },
    {
        name: "SunMed CBD",
        description: "Hot box at 4:20 the fatty dank endo doobie in a cashed roachclip, Bogart. Wake and bake indica hash at the dispensary in Oregon decriminalized. Crystalized buds from trimming tasty weed pens THC sativa euphoric resinated dome piece. California kush roll it up into a fat blunt for medicinal purposes to elevate your consciousness. Guatemalan purple haze grown outdoors by ganja shaman.",
        brand: "SunMed",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147353"
    },
    {
        name: "Koi CBD",
        description: "Legalize spliffs for recreational Snoop Dogg edibles pusher cannabidiol cartoons. Littering and butter stuff more cerebral high couch lock Abba Zabba you my only friend. Pass the duchie Bob Marley this shatter is hella potent. Rolling down the street smoking endo, laid back. Have you ever tried Lorem Ipsum on Weeeeeeeeeeed?",
        brand: "Koi",
        type: ["oil"],
        storeID: "5d474e210953e00dbc14734e"
    },
    {
        name: "Gold Standard CBD",
        description: "Indica is like ‘in da couch’ like straight couch lock chasing waterfalls and milkers straight to your dome. French inhale topical CBD lotion and binge watch Cheech and Chong. Extremely dope chronic eye drops in the basement with psychedellic nugs. Toke up on the Pineapple Express with that sticky icky shotgun sensamillia. Just give us the whizzaa!",
        brand: "Gold Standard",
        type: ["oil"],
        storeID: "5d474e210953e00dbc14734e"
    },
    {
        name: "Koi CBD",
        description: "Make a quick pipe out of an apple and release the carb Purple Haze all around. Rasta! Fully man, keif gummies are the indoor equivalent of body high super mellow. Dude you’re just being paranoid, don’t call the cops. OG grandaddy purps with notes of diesel.",
        brand: "Koi",
        type: ["oil"],
        storeID: "5d474e210953e00dbc14734f"
    },
    {
        name: "Gold Standard CBD",
        description: "Hydroponic nacho pop-tarts tetrahydrocannabinol hybrid schwag stems and seeds little orange hairs. The cannabis industry will gravity bong a cotton mouth pizza dipped in ranch. Broccoli bong butterfly gateway drugs to elevate your good vibrations. Taco Bell 4th meal with Doritos Locos tacos and a knife rip on the side. Optimizing dime bags of pre-rolled honey oil dabs.",
        brand: "Gold Standard",
        type: ["oil"],
        storeID: "5d474e210953e00dbc14734f"
    },
    {
        name: "Koi CBD",
        description: "Hot box at 4:20 the fatty dank endo doobie in a cashed roachclip, Bogart. Wake and bake indica hash at the dispensary in Oregon decriminalized. Crystalized buds from trimming tasty weed pens THC sativa euphoric resinated dome piece. California kush roll it up into a fat blunt for medicinal purposes to elevate your consciousness. Guatemalan purple haze grown outdoors by ganja shaman.",
        brand: "Koi",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147350"
    },
    { 
        name: "Gold Standard CBD",
        description: "Legalize spliffs for recreational Snoop Dogg edibles pusher cannabidiol cartoons. Littering and butter stuff more cerebral high couch lock Abba Zabba you my only friend. Pass the duchie Bob Marley this shatter is hella potent. Rolling down the street smoking endo, laid back. Have you ever tried Lorem Ipsum on Weeeeeeeeeeed?",
        brand: "Gold Standard",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147350"
    },
    {
        name: "Koi CBD",
        description: "Indica is like ‘in da couch’ like straight couch lock chasing waterfalls and milkers straight to your dome. French inhale topical CBD lotion and binge watch Cheech and Chong. Extremely dope chronic eye drops in the basement with psychedellic nugs. Toke up on the Pineapple Express with that sticky icky shotgun sensamillia. Just give us the whizzaa!",
        brand: "Koi",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147351"
    },
    {
        name: "EcoCaps",
        description: "Make a quick pipe out of an apple and release the carb Purple Haze all around. Rasta! Fully man, keif gummies are the indoor equivalent of body high super mellow. Dude you’re just being paranoid, don’t call the cops. OG grandaddy purps with notes of diesel.",
        brand: "CBD Drip",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147354"
    },
    {
        name: "CBD drip",
        description: "Hydroponic nacho pop-tarts tetrahydrocannabinol hybrid schwag stems and seeds little orange hairs. The cannabis industry will gravity bong a cotton mouth pizza dipped in ranch. Broccoli bong butterfly gateway drugs to elevate your good vibrations. Taco Bell 4th meal with Doritos Locos tacos and a knife rip on the side. Optimizing dime bags of pre-rolled honey oil dabs.",
        brand: "CBD Drip",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147354"
    },
    {
        name: "Naternal CBD",
        description: "Hot box at 4:20 the fatty dank endo doobie in a cashed roachclip, Bogart. Wake and bake indica hash at the dispensary in Oregon decriminalized. Crystalized buds from trimming tasty weed pens THC sativa euphoric resinated dome piece. California kush roll it up into a fat blunt for medicinal purposes to elevate your consciousness. Guatemalan purple haze grown outdoors by ganja shaman.",
        brand: "Naternal",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147355"
    },
    {
        name: "Sun State Hemp CBD",
        description: "Legalize spliffs for recreational Snoop Dogg edibles pusher cannabidiol cartoons. Littering and butter stuff more cerebral high couch lock Abba Zabba you my only friend. Pass the duchie Bob Marley this shatter is hella potent. Rolling down the street smoking endo, laid back. Have you ever tried Lorem Ipsum on Weeeeeeeeeeed?",
        brand: "Sun State Hemp",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147355"
    },
    {
        name: "Lumi CBD",
        description: "Indica is like ‘in da couch’ like straight couch lock chasing waterfalls and milkers straight to your dome. French inhale topical CBD lotion and binge watch Cheech and Chong. Extremely dope chronic eye drops in the basement with psychedellic nugs. Toke up on the Pineapple Express with that sticky icky shotgun sensamillia. Just give us the whizzaa!",
        brand: "Lumi",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147355"
    },
    {
        name: "Halcyon Leaf CBD",
        description: "Make a quick pipe out of an apple and release the carb Purple Haze all around. Rasta! Fully man, keif gummies are the indoor equivalent of body high super mellow. Dude you’re just being paranoid, don’t call the cops. OG grandaddy purps with notes of diesel.",
        brand: "Halcyon Leaf",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147356"
    },
    {
        name: "Carolina's Hope CBD",
        description: "Hydroponic nacho pop-tarts tetrahydrocannabinol hybrid schwag stems and seeds little orange hairs. The cannabis industry will gravity bong a cotton mouth pizza dipped in ranch. Broccoli bong butterfly gateway drugs to elevate your good vibrations. Taco Bell 4th meal with Doritos Locos tacos and a knife rip on the side. Optimizing dime bags of pre-rolled honey oil dabs.",
        brand: "Carolina's Hope",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147358"
    },
    {
        name: "Clean Remedies CBD",
        description: "Hot box at 4:20 the fatty dank endo doobie in a cashed roachclip, Bogart. Wake and bake indica hash at the dispensary in Oregon decriminalized. Crystalized buds from trimming tasty weed pens THC sativa euphoric resinated dome piece. California kush roll it up into a fat blunt for medicinal purposes to elevate your consciousness. Guatemalan purple haze grown outdoors by ganja shaman.",
        brand: "Clean Remedies",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147358"
    },
    {
        name: "Legacy Farms CBD",
        description: "Legalize spliffs for recreational Snoop Dogg edibles pusher cannabidiol cartoons. Littering and butter stuff more cerebral high couch lock Abba Zabba you my only friend. Pass the duchie Bob Marley this shatter is hella potent. Rolling down the street smoking endo, laid back. Have you ever tried Lorem Ipsum on Weeeeeeeeeeed?",
        brand: "Legacy Farms",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147358"
    },
    {
        name: "Queen City CBD",
        description: "Indica is like ‘in da couch’ like straight couch lock chasing waterfalls and milkers straight to your dome. French inhale topical CBD lotion and binge watch Cheech and Chong. Extremely dope chronic eye drops in the basement with psychedellic nugs. Toke up on the Pineapple Express with that sticky icky shotgun sensamillia. Just give us the whizzaa!",
        brand: "Queen City Hemp",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147358"
    },
    {
        name: "Hemp Lucid CBD",
        description: "Make a quick pipe out of an apple and release the carb Purple Haze all around. Rasta! Fully man, keif gummies are the indoor equivalent of body high super mellow. Dude you’re just being paranoid, don’t call the cops. OG grandaddy purps with notes of diesel.",
        brand: "Hemp Lucid",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147358"
    },
    {
        name: "Simpli Botanicals CBD",
        description: "Hydroponic nacho pop-tarts tetrahydrocannabinol hybrid schwag stems and seeds little orange hairs. The cannabis industry will gravity bong a cotton mouth pizza dipped in ranch. Broccoli bong butterfly gateway drugs to elevate your good vibrations. Taco Bell 4th meal with Doritos Locos tacos and a knife rip on the side. Optimizing dime bags of pre-rolled honey oil dabs.",
        brand: "Simpli Botanicals",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147358"
    },
    {
        name: "The Elixir CBD",
        description: "Hot box at 4:20 the fatty dank endo doobie in a cashed roachclip, Bogart. Wake and bake indica hash at the dispensary in Oregon decriminalized. Crystalized buds from trimming tasty weed pens THC sativa euphoric resinated dome piece. California kush roll it up into a fat blunt for medicinal purposes to elevate your consciousness. Guatemalan purple haze grown outdoors by ganja shaman.",
        brand: "OROrganics",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147358"
    },
    {
        name: "Sana Botanicals CBD",
        description: "Legalize spliffs for recreational Snoop Dogg edibles pusher cannabidiol cartoons. Littering and butter stuff more cerebral high couch lock Abba Zabba you my only friend. Pass the duchie Bob Marley this shatter is hella potent. Rolling down the street smoking endo, laid back. Have you ever tried Lorem Ipsum on Weeeeeeeeeeed?",
        brand: "Sana Botanicals",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147358"
    },
    {
        name: "MEDterra CBD",
        description: "Indica is like ‘in da couch’ like straight couch lock chasing waterfalls and milkers straight to your dome. French inhale topical CBD lotion and binge watch Cheech and Chong. Extremely dope chronic eye drops in the basement with psychedellic nugs. Toke up on the Pineapple Express with that sticky icky shotgun sensamillia. Just give us the whizzaa!",
        brand: "MEDterra",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147358"
    },
    {
        name: "Lazarus Naturals CBD",
        description: "Make a quick pipe out of an apple and release the carb Purple Haze all around. Rasta! Fully man, keif gummies are the indoor equivalent of body high super mellow. Dude you’re just being paranoid, don’t call the cops. OG grandaddy purps with notes of diesel.",
        brand: "Lazarus Naturals",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147359"
    },
    {
        name: "Charlotte's Web CBD",
        description: "Hydroponic nacho pop-tarts tetrahydrocannabinol hybrid schwag stems and seeds little orange hairs. The cannabis industry will gravity bong a cotton mouth pizza dipped in ranch. Broccoli bong butterfly gateway drugs to elevate your good vibrations. Taco Bell 4th meal with Doritos Locos tacos and a knife rip on the side. Optimizing dime bags of pre-rolled honey oil dabs.",
        brand: "Charlotte's Web",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147359"
    },
    {
        name: "CBDistillary CBD",
        description: "Hot box at 4:20 the fatty dank endo doobie in a cashed roachclip, Bogart. Wake and bake indica hash at the dispensary in Oregon decriminalized. Crystalized buds from trimming tasty weed pens THC sativa euphoric resinated dome piece. California kush roll it up into a fat blunt for medicinal purposes to elevate your consciousness. Guatemalan purple haze grown outdoors by ganja shaman.",
        brand: "CBDistillary",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147359"
    },
    {
        name: "Bluebird CBD",
        description: "Legalize spliffs for recreational Snoop Dogg edibles pusher cannabidiol cartoons. Littering and butter stuff more cerebral high couch lock Abba Zabba you my only friend. Pass the duchie Bob Marley this shatter is hella potent. Rolling down the street smoking endo, laid back. Have you ever tried Lorem Ipsum on Weeeeeeeeeeed?",
        brand: "Bluebird",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147359"
    },
    {
        name: "Cannibidoil Life CBD",
        description: "Indica is like ‘in da couch’ like straight couch lock chasing waterfalls and milkers straight to your dome. French inhale topical CBD lotion and binge watch Cheech and Chong. Extremely dope chronic eye drops in the basement with psychedellic nugs. Toke up on the Pineapple Express with that sticky icky shotgun sensamillia. Just give us the whizzaa!",
        brand: "Cannabidoil Life",
        type: ["oil"],
        storeID: "5d474e210953e00dbc147359"
    },
    {
        name: "Charlotte's Web CBD",
        description: "Make a quick pipe out of an apple and release the carb Purple Haze all around. Rasta! Fully man, keif gummies are the indoor equivalent of body high super mellow. Dude you’re just being paranoid, don’t call the cops. OG grandaddy purps with notes of diesel.",
        brand: "Charlotte's Web",
        type: ["oil"],
        storeID: "5d474e210953e00dbc14735a"
    },
    {
        name: "Carolina Hemp Co CBD",
        description: "Hydroponic nacho pop-tarts tetrahydrocannabinol hybrid schwag stems and seeds little orange hairs. The cannabis industry will gravity bong a cotton mouth pizza dipped in ranch. Broccoli bong butterfly gateway drugs to elevate your good vibrations. Taco Bell 4th meal with Doritos Locos tacos and a knife rip on the side. Optimizing dime bags of pre-rolled honey oil dabs.",
        brand: "Carolina Hemp Co",
        type: ["oil"],
        storeID: "5d474e210953e00dbc14735a"
    },
    {
        name: "Restorative Botanicals CBD",
        description: "Hot box at 4:20 the fatty dank endo doobie in a cashed roachclip, Bogart. Wake and bake indica hash at the dispensary in Oregon decriminalized. Crystalized buds from trimming tasty weed pens THC sativa euphoric resinated dome piece. California kush roll it up into a fat blunt for medicinal purposes to elevate your consciousness. Guatemalan purple haze grown outdoors by ganja shaman.",
        brand: "Restorative Botanicals",
        type: ["oil"],
        storeID: "5d474e210953e00dbc14735a"
    },
    {
        name: "CBDistillary CBD",
        description: "Legalize spliffs for recreational Snoop Dogg edibles pusher cannabidiol cartoons. Littering and butter stuff more cerebral high couch lock Abba Zabba you my only friend. Pass the duchie Bob Marley this shatter is hella potent. Rolling down the street smoking endo, laid back. Have you ever tried Lorem Ipsum on Weeeeeeeeeeed?",
        brand: "CBDistillary",
        type: ["oil"],
        storeID: "5d474e210953e00dbc14735a"
    },
    {
        name: "Kingdom Harvest CBD",
        description: "Indica is like ‘in da couch’ like straight couch lock chasing waterfalls and milkers straight to your dome. French inhale topical CBD lotion and binge watch Cheech and Chong. Extremely dope chronic eye drops in the basement with psychedellic nugs. Toke up on the Pineapple Express with that sticky icky shotgun sensamillia. Just give us the whizzaa!",
        brand: "Kingdom Harvest CBD",
        type: ["oil"],
        storeID: "5d474e210953e00dbc14735a"
    },
    {
        name: "The Brothers Apothecary CBD",
        description: "Make a quick pipe out of an apple and release the carb Purple Haze all around. Rasta! Fully man, keif gummies are the indoor equivalent of body high super mellow. Dude you’re just being paranoid, don’t call the cops. OG grandaddy purps with notes of diesel.",
        brand: "The Brothers Apothecary",
        type: ["oil"],
        storeID: "5d474e210953e00dbc14735a"
    },
    {
        name: "Gron Chocolates & Tinctures CBD",
        description: "Hydroponic nacho pop-tarts tetrahydrocannabinol hybrid schwag stems and seeds little orange hairs. The cannabis industry will gravity bong a cotton mouth pizza dipped in ranch. Broccoli bong butterfly gateway drugs to elevate your good vibrations. Taco Bell 4th meal with Doritos Locos tacos and a knife rip on the side. Optimizing dime bags of pre-rolled honey oil dabs.",
        brand: "Gron Chocolates & Tinctures",
        type: ["oil"],
        storeID: "5d474e210953e00dbc14735a"
    },
    {
        name: "Lazarus Naturals CBD",
        description: "Hot box at 4:20 the fatty dank endo doobie in a cashed roachclip, Bogart. Wake and bake indica hash at the dispensary in Oregon decriminalized. Crystalized buds from trimming tasty weed pens THC sativa euphoric resinated dome piece. California kush roll it up into a fat blunt for medicinal purposes to elevate your consciousness. Guatemalan purple haze grown outdoors by ganja shaman.",
        brand: "Lazarus Naturals",
        type: ["oil"],
        storeID: "5d474e210953e00dbc14735a"
    }
];


db.Product
    .remove({})
    .then(() => db.Product.collection.insertMany(productSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });