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

const storeSeed = [
    {
        name: "The Hemp Store NC",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper dui ac laoreet molestie. Sed aliquet, sapien non aliquet maximus, leo magna congue sem, sed tincidunt libero tortor non tortor. Phasellus sodales ipsum volutpat rhoncus sodales. Praesent vulputate condimentum felis eu aliquam. In ullamcorper metus et nulla rhoncus accumsan. Curabitur tempus, ligula a tincidunt pulvinar, dolor enim congue justo, in iaculis arcu tellus sed enim. Maecenas tincidunt commodo risus vel pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus vel lectus elementum, gravida magna et, varius nunc.",
        addressLine1: "1000 Old Milburnie Rd",
        addressLine2: "Suite 1",
        city: "Raleigh",
        state: "NC",
        zip: "27604",
        locationID: "5d471e82fce97c3cf0b7d0d8",
        products: [],
        comments: []
    },
    {
        name: "The Hemp Store Chapel Hill",
        description: "Cras nec consequat risus. Integer ullamcorper eros non vehicula feugiat. Suspendisse in bibendum ipsum. Vestibulum tincidunt risus quis cursus rhoncus. Donec et congue justo, id pellentesque erat. Mauris eu pellentesque ex, eget pulvinar orci. Phasellus id erat lorem. Nunc porttitor faucibus dui vel vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut pulvinar volutpat mi, ac maximus sem eleifend sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur vitae tortor suscipit, blandit diam vitae, commodo risus. Pellentesque iaculis tortor ut nulla semper tincidunt. Nulla eleifend luctus est.",
        addressLine1: "115 E Franklin St",
        addressLine2: "",
        city: "Chapel Hill",
        state: "NC",
        zip: "27514",
        locationID: "5d471e82fce97c3cf0b7d0d9",
        products: [],
        comments: []
    },
    {
        name: "The Hemp Store Wake Forest",
        description: "Ut massa tellus, dignissim non laoreet ut, dictum ac nulla. Suspendisse aliquet nisi non eros pellentesque imperdiet. Phasellus orci orci, accumsan in mollis ac, bibendum ac tellus. Suspendisse malesuada facilisis nulla vel mollis. Pellentesque tincidunt ac ex eget ullamcorper. Morbi et velit lacinia, tempor urna a, mattis urna. Maecenas et porta urna. Proin placerat mi id blandit luctus. Fusce dui dui, dictum ut orci vitae, semper suscipit lectus. Etiam ultricies semper mi et blandit.",
        addressLine1: "1002 Durham Rd",
        addressLine2: "Suite 1100",
        city: "Wake Forest",
        state: "NC",
        zip: "27587",
        locationID: "5d471e82fce97c3cf0b7d0da",
        products: [],
        comments: []
    },
    {
        name: "Smoke & Talk",
        description: "Ut non ultricies tortor. In eleifend justo et mauris fringilla, a feugiat quam iaculis. Aliquam quis lorem a ex condimentum aliquet. Aliquam rutrum accumsan diam, imperdiet condimentum sem vulputate et. Pellentesque vulputate suscipit pretium. Curabitur risus felis, rutrum ac lectus vitae, hendrerit pretium nisl. Maecenas elementum nunc sed laoreet sodales. Quisque sollicitudin bibendum diam at congue. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        addressLine1: "3675 New Bern Ave",
        addressLine2: "",
        city: "Raleigh",
        state: "NC",
        zip: "27610",
        locationID: "5d471e82fce97c3cf0b7d0d8",
        products: [],
        comments: []
    },
    {
        name: "Your CBD Store",
        description: "Duis finibus tellus et magna tempus feugiat. Donec vehicula finibus augue id varius. Mauris gravida et erat at tincidunt. Cras leo lacus, sagittis et interdum non, condimentum in nisi. Aliquam lacinia fermentum ante. Quisque eleifend, erat et facilisis euismod, massa nisi imperdiet leo, nec aliquam est ipsum vitae justo. Donec varius leo quis gravida tincidunt. Vivamus mollis accumsan nunc, in ullamcorper velit lacinia nec. Integer tempor purus vitae mattis egestas. Aenean vehicula dui vel nunc luctus, egestas venenatis nisi fermentum. Aenean et neque tempus velit congue vulputate id nec risus.",
        addressLine1: "7304 Vanclayborn Rd",
        addressLine2: "",
        city: "Apex",
        state: "NC",
        zip: "27523",
        locationID: "5d471e82fce97c3cf0b7d0dd",
        products: [],
        comments: []
    },
    {
        name: "Your CBD Store - Wake Forest",
        description: "Nulla pellentesque vel felis gravida ultricies. Donec a mi in massa tincidunt malesuada. Proin imperdiet lorem ante, vitae dapibus nisi condimentum id. Quisque sagittis sapien vitae fringilla posuere. Nam magna ipsum, ultrices eu viverra interdum, faucibus ac ex. Vestibulum vitae bibendum erat. Donec congue augue at ante rutrum, id sollicitudin massa volutpat. Aenean luctus vehicula magna, eu iaculis nisl placerat a. Aenean interdum est ac justo pulvinar tempor. Pellentesque elit leo, molestie quis urna in, volutpat congue neque. Morbi mauris nulla, aliquet a iaculis non, faucibus ac dui. Etiam eget tempor diam. Fusce id erat nec neque porttitor rhoncus at nec ipsum. Nullam rhoncus magna urna, sit amet commodo sapien lobortis eu. Praesent fermentum augue non augue tempus, quis pulvinar tellus mattis. Curabitur blandit sapien pretium elit porta faucibus.",
        addressLine1: "706 N Main St",
        addressLine2: "",
        city: "Wake Forest",
        state: "NC",
        zip: "27587",
        locationID: "5d471e82fce97c3cf0b7d0da",
        products: [],
        comments: []
    },
    {
        name: "Misty Mountain Vapors - Vape & CBD",
        description: "Nulla eu cursus justo. Proin quis tellus et felis luctus dictum ut id nisi. Quisque blandit nunc eu posuere maximus. Proin ac urna eget est maximus consectetur a fermentum turpis. Aenean eu ornare leo. Nulla nec nisl nec eros efficitur lobortis. Pellentesque dictum justo vulputate turpis rhoncus, ut interdum nunc ullamcorper. In bibendum turpis vel elit sodales, interdum mattis diam sagittis. Cras nisl orci, faucibus non facilisis sit amet, blandit ut nulla. Cras ut dolor quis erat pellentesque consectetur nec nec enim. Proin non accumsan diam. Nam semper elit non gravida congue. Praesent nec sapien vitae eros pellentesque condimentum id fringilla lectus.",
        addressLine1: "5710 Capital Blvd",
        addressLine2: "",
        city: "Raleigh",
        state: "NC",
        zip: "27616",
        locationID: "5d471e82fce97c3cf0b7d0d8",
        products: [],
        comments: []
    },
    {
        name: "HempKo",
        description: "Nulla fringilla, tortor ac luctus ultrices, velit arcu laoreet leo, et cursus lacus lectus sit amet sem. Nunc viverra lacus at ipsum accumsan tincidunt. Duis ut dolor pretium massa molestie malesuada nec nec est. Maecenas nibh dui, interdum a tempus id, gravida at ligula. Aenean varius sollicitudin laoreet. Nullam vestibulum cursus massa eget rutrum. Cras iaculis accumsan pellentesque. Quisque nec purus eget libero sollicitudin dignissim in et sapien. Nunc facilisis metus vitae ornare sodales. Duis ultrices ante commodo dignissim malesuada. Pellentesque imperdiet nulla nec nisi accumsan, et scelerisque purus tristique.",
        addressLine1: "522 E Williams St",
        addressLine2: "",
        city: "Apex",
        state: "NC",
        zip: "27502",
        locationID: "5d471e82fce97c3cf0b7d0dd",
        products: [],
        comments: []
    },
    {
        name: "The Hemptender Dispensary",
        description: "Etiam iaculis feugiat elit, sit amet imperdiet purus dignissim eget. Donec viverra eu sapien vitae sodales. Quisque iaculis enim quis tellus tincidunt tincidunt. Phasellus sed pharetra nibh, ut convallis nisl. Sed vitae dignissim nisl. Suspendisse efficitur tempor felis, vitae sodales ligula tincidunt vel. Mauris egestas, nisi vel gravida ornare, orci quam varius est, ac rhoncus ante magna at metus. Ut turpis neque, sodales a sem vitae, sagittis dapibus felis. Praesent in condimentum erat. Phasellus commodo sagittis mauris vitae bibendum. Pellentesque eu finibus mauris. Curabitur sed tincidunt arcu.",
        addressLine1: "1920 NC-54",
        addressLine2: "Suite 50",
        city: "Durham",
        state: "NC",
        zip: "27713",
        locationID: "5d471e82fce97c3cf0b7d0db",
        products: [],
        comments: []
    },
    {
        name: "The Hemp Boutique of Cary",
        description: "Vestibulum ac leo lacus. Phasellus ornare, ipsum sed rhoncus vulputate, neque tortor mattis ante, non pharetra dolor turpis vitae leo. Praesent eu mauris ut leo luctus elementum. Etiam justo ex, vehicula quis orci eget, euismod iaculis est. Vestibulum felis magna, eleifend vitae pellentesque non, sodales at lectus. Suspendisse ac felis sed metus imperdiet egestas. Sed tempor dui in suscipit ultricies. Suspendisse quis sapien non tortor tempor eleifend. Vestibulum a ex elit. Aliquam velit velit, tempus vitae nibh sodales, condimentum auctor eros. Ut eget enim non nisl semper volutpat eget ac velit. In et diam molestie nunc pellentesque mollis sit amet eget orci. Sed ac eros ante. Etiam vel elit iaculis, ornare mi vitae, laoreet elit. Proin maximus rutrum tortor. Etiam eu dolor convallis, vestibulum felis et, ullamcorper augue.",
        addressLine1: "247 W Chatham St",
        addressLine2: "",
        city: "Cary",
        state: "NC",
        zip: "27511",
        locationID: "5d471e82fce97c3cf0b7d0de",
        products: [],
        comments: []
    },
    {
        name: "The Hemp Farmacy",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper dui ac laoreet molestie. Sed aliquet, sapien non aliquet maximus, leo magna congue sem, sed tincidunt libero tortor non tortor. Phasellus sodales ipsum volutpat rhoncus sodales. Praesent vulputate condimentum felis eu aliquam. In ullamcorper metus et nulla rhoncus accumsan. Curabitur tempus, ligula a tincidunt pulvinar, dolor enim congue justo, in iaculis arcu tellus sed enim. Maecenas tincidunt commodo risus vel pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus vel lectus elementum, gravida magna et, varius nunc.",
        addressLine1: "8604 Falls of Nuese Rd",
        addressLine2: "Suite 104",
        city: "Raleigh",
        state: "NC",
        zip: "27615",
        locationID: "5d471e82fce97c3cf0b7d0d8",
        products: [],
        comments: []
    },
    {
        name: "Hemp Times Inc",
        description: "Cras nec consequat risus. Integer ullamcorper eros non vehicula feugiat. Suspendisse in bibendum ipsum. Vestibulum tincidunt risus quis cursus rhoncus. Donec et congue justo, id pellentesque erat. Mauris eu pellentesque ex, eget pulvinar orci. Phasellus id erat lorem. Nunc porttitor faucibus dui vel vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut pulvinar volutpat mi, ac maximus sem eleifend sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur vitae tortor suscipit, blandit diam vitae, commodo risus. Pellentesque iaculis tortor ut nulla semper tincidunt. Nulla eleifend luctus est.",
        addressLine1: "510 St. Mary's St",
        addressLine2: "Suite 5",
        city: "Raleigh",
        state: "NC",
        zip: "27605",
        locationID: "5d471e82fce97c3cf0b7d0d8",
        products: [],
        comments: []
    },
    {
        name: "Nature's Releaf Hemp Store",
        description: "Ut massa tellus, dignissim non laoreet ut, dictum ac nulla. Suspendisse aliquet nisi non eros pellentesque imperdiet. Phasellus orci orci, accumsan in mollis ac, bibendum ac tellus. Suspendisse malesuada facilisis nulla vel mollis. Pellentesque tincidunt ac ex eget ullamcorper. Morbi et velit lacinia, tempor urna a, mattis urna. Maecenas et porta urna. Proin placerat mi id blandit luctus. Fusce dui dui, dictum ut orci vitae, semper suscipit lectus. Etiam ultricies semper mi et blandit.",
        addressLine1: "5224 Hollyridge Dr",
        addressLine2: "",
        city: "Raleigh",
        state: "NC",
        zip: "27612",
        locationID: "5d471e82fce97c3cf0b7d0d8",
        products: [],
        comments: []
    },
    {
        name: "Good Guy Vapes",
        description: "Ut non ultricies tortor. In eleifend justo et mauris fringilla, a feugiat quam iaculis. Aliquam quis lorem a ex condimentum aliquet. Aliquam rutrum accumsan diam, imperdiet condimentum sem vulputate et. Pellentesque vulputate suscipit pretium. Curabitur risus felis, rutrum ac lectus vitae, hendrerit pretium nisl. Maecenas elementum nunc sed laoreet sodales. Quisque sollicitudin bibendum diam at congue. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        addressLine1: "10970 Chapel Hill Rd",
        addressLine2: "",
        city: "Morrisville",
        state: "NC",
        zip: "27560",
        locationID: "5d471e82fce97c3cf0b7d0dc",
        products: [],
        comments: []
    },
    {
        name: "DailyVita",
        description: "Duis finibus tellus et magna tempus feugiat. Donec vehicula finibus augue id varius. Mauris gravida et erat at tincidunt. Cras leo lacus, sagittis et interdum non, condimentum in nisi. Aliquam lacinia fermentum ante. Quisque eleifend, erat et facilisis euismod, massa nisi imperdiet leo, nec aliquam est ipsum vitae justo. Donec varius leo quis gravida tincidunt. Vivamus mollis accumsan nunc, in ullamcorper velit lacinia nec. Integer tempor purus vitae mattis egestas. Aenean vehicula dui vel nunc luctus, egestas venenatis nisi fermentum. Aenean et neque tempus velit congue vulputate id nec risus.",
        addressLine1: "5408 Apex Peakway",
        addressLine2: "",
        city: "Apex",
        state: "NC",
        zip: "27502",
        locationID: "5d471e82fce97c3cf0b7d0dd",
        products: [],
        comments: []
    }
];

db.Store
  .remove({})
  .then(() => db.Store.collection.insertMany(storeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



