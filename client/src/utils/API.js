import axios from "axios";

export default {
  getLocations: function() {
    return axios.get("/api/locations");
  },
  getStore: function(id) {
    return axios.get("/api/store/" + id);
  },
  getProduct: function(id) {
    console.log("getProduct(" + id + ")");
    return axios.get("/api/product/" + id);
  },
  getUser: function(credentials) {
    return axios.get("/api/user/" + credentials);
  },
  searchProductByName: function(searchTerms) {
    console.log("(utils/API.js) searchProductByName: " + "/api/product/name/" + searchTerms);
    return axios.get("/api/product/name/" + searchTerms);
  },
  submitComment: function(comment, actionSource) {
    console.log("(utils/API.js) submitComment: ", comment);

    if(actionSource === 'store')
    {
      // comment add or edit from store page
      return axios.post("/api/store/storeComment", comment);
    }
    else if(actionSource === 'user')
    {
      // comment edit from user page
    }
    else
    {
      console.log("Unexpected actionSource: " + actionSource);
      return null;
    }
  },
  deleteComment: function(commentID, actionSource){
    console.log("(utils/API.js) submitComment: ", commentID);
    if(actionSource === 'store')
    {
      console.log("Unexpected actionSource: " + "STORE");
      return axios.delete("/api/store/storeComment/" + commentID);
    }
    else if(actionSource === 'user')
    {
      console.log("Unexpected actionSource: " + "USER");
      return axios.delete("/api/user/storeComment/" + commentID);
    }
    else
    {
      console.log("Unexpected actionSource: " + actionSource);
      return null;
    }
  }
  /* 
  // Gets all books
    getBooks: function() {
      return axios.get("/api/books");
    },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  googleBooksSearch: function(searchText){
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchText);
  }*/
};
