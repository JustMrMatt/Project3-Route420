# Route 420

[Deployed App](heroku.com)

Cataloging stores in North Carolina that sell CBD products.

## Technologies

 * HTML
 * CSS
 * JavaScript
 * Node JS
 * React 
 * Mongo DB, Mongoose

 ## Database

 Data is stored in a Mongo (NoSQL) Database, but we use Mongoose to create realtional functionality.

 Mongo Collections:

  * Users: Documents (records) that represent people who have accounts.
  * Locations: City's that have stores that sell CBD products.
  * Stores: Stores that sell CBD products.
  * Products: CBD product details.
  * Store Comments: Feedback provided by users to specific stores.

 The diagram below prvides a simple view of our tables (collections) and the relationships between them.

 ![database](/documentation/database_diagram.png)

 # Application Components

 The app consist of a number of pages, each with a specific purpose.

 ## Home Page

 Provides a search bar that a visitor can use to search for Products.

![product search](/documentation/product_search.gif)

 ## Account Page

 By default this page will present a sign-in screen for a visitor to provide email and password.

 If a document from the Users collection matches the input then the user's profile will load showing name, email, and comments they have made.

![user profile](/documentation/user_profile.gif)

 If the user is an admin they will be able to access the Admin Dashboard.

 ### Admin Dashboard (future)

 Specific individuals have the ability to directly add, modify, or remove data from the database.

 ![admin page](/documentation/admin_page.gif)

 ## Locations Page

 The locations page displays a list of all stores grouped by the city they are located in.

 Clicking on a store's name will take the visitor to that store's page.

 ## Store Page

 Store data is displayed including address, descriptive text, the products the store carries, and any comments a user has made about the store.

 Clicking a product's name will take the visitor to that product's page.

Only a signed in user can leave comments, and they will only be able to delete comments that they themselves have made.

![add delete comment](/documentation/add_delete_comment.gif)
 
 ## Product Page

The product page displays the details of the specific product.



