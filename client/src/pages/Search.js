import React, { Component } from "react";
//import SaveBtn from "../components/SaveBtn";
import Jumbotron from "../components/Jumbotron";
//import NewsFeed from "../components/NewsFeed";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import "../components/Jumbotron/style.css";
//import { ResultList, ResultItem } from "../components/Results";

class Search extends Component {
  state = {
    searchTerms: "",
    filter: "",
    results: [],
  };

  /*componentDidMount() {
    this.loadBooks();
  }*/

  /*loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };*/

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  saveBook = (book) => {
  /*
    API.saveBook(book)
      .then(res => {
        // removed the saved book from the results list.

        // var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
        // var removed = myFish.splice(3, 1);
        // removed is ["mandarin"]
        // myFish is ["angel", "clown", "drum", "sturgeon"]

        // find index of book
        var bookIndex = -1;
        for (var i = 0; i < this.state.results.length; i++)
        {
            if(this.state.results[i].link === book.link)
            {
                bookIndex = i;
                break;
            }
        }

        if(bookIndex > -1)
        {
            var tmpResults = this.state.results;
            var removedBook = tmpResults.splice(bookIndex,1);
            this.setState({results: tmpResults});
        }

      })
      .catch(err => console.log(err));
    */};



  doGoogleBooksSearch = event =>
  {/*
    event.preventDefault();
    var searchText = this.state.title.trim();
    API.googleBooksSearch(searchText).then(res => 
      {
        console.log(res.data.items);
        this.setState({ books: res.data, title: "", author: "", synopsis: "" });

        var resDataItems = res.data.items;
        var searchResults = [];

        if(resDataItems.length > 0)
        {
          for(var i = 0; i < resDataItems.length; i++)
          {
            var tmpAuthor = "";
            var tmpImage = "";
           
            if (resDataItems[i].volumeInfo.authors)
            {
              tmpAuthor = resDataItems[i].volumeInfo.authors[0];
            }
            else
            {
              tmpAuthor = "UNKNOWN";
            }

            if (resDataItems[i].volumeInfo.imageLinks)
            {
              tmpImage = resDataItems[i].volumeInfo.imageLinks.thumbnail;
            }
            else
            {
              tmpImage = "no_thumbnail.png";
            }

            var tmpBook = {
              author: tmpAuthor,
              title: resDataItems[i].volumeInfo.title,
              description: resDataItems[i].volumeInfo.description,
              link: resDataItems[i].volumeInfo.infoLink,
              image: tmpImage
            };

            searchResults.push(tmpBook);

          }
        }
        else
        {
          var noResult = {
            author: "",
            title: "No results found.",
            description: "",
            link: "",
            image: ""
          };

          searchResults.push(noResult);
        }

        this.setState({ 
          books: res.data, 
          title: "", 
          author: "", 
          synopsis: "",
          results: searchResults
         });

      });
    */};


  doProductSearch = event =>
  {
    event.preventDefault();
    var searchBy = this.state.filter;
    var searchTerms = this.state.searchTerms.trim().toLowerCase();
    // find space characters replace with +
    var formatSearchTerms = searchTerms.split(' ').join('+').trim();
    searchBy = "name"; // for now filter is hard-coded, we do want the user to select their filter (name, brand, tag)

    switch (searchBy) 
    {
      case "name":
        this.searchByName(formatSearchTerms);
        break;
      case "brand":
        this.searchByBrand(formatSearchTerms);
        break;
      case "tag":
        this.searchByTag(formatSearchTerms);
        break;
      default:
        alert("Unexpected Search Filter: " + searchBy);
        break;
    }
  }

  searchByName = (searchTerm) =>
  {
    console.log("(pages/Search.js) Searching By Name: " + searchTerm);

    API.searchProductByName(searchTerm)
      .then(res => {
        console.log("searchProductByName response: ", res);

        this.setState({
          searchTerms: "",
          filter: "",
          results: res.data
        });

        /*
        // removed the saved book from the results list.

        // var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
        // var removed = myFish.splice(3, 1);
        // removed is ["mandarin"]
        // myFish is ["angel", "clown", "drum", "sturgeon"]

        // find index of book
        var bookIndex = -1;
        for (var i = 0; i < this.state.results.length; i++)
        {
            if(this.state.results[i].link === book.link)
            {
                bookIndex = i;
                break;
            }
        }

        if(bookIndex > -1)
        {
            var tmpResults = this.state.results;
            var removedBook = tmpResults.splice(bookIndex,1);
            this.setState({results: tmpResults});
        }*/
      })
      .catch(err => console.log(err));

  }

  searchByBrand = (searchTerm) =>
  {
    console.log("Searching By Name: " + searchTerm);
  }

  searchByTag = (searchTerm) =>
  {
    console.log("Searching By Name: " + searchTerm);
  }



  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-2"></Col>

          <Col size="md-8">
            <br />
            <Jumbotron id="jumbotron">

              <Row>

                <Col size="md-6">
                  <h1 id="title">Never be without CBD ever again.</h1>
                  <br />
                  <h2>Find what you want and where it's sold.</h2>

                </Col>

                <Col size="5">
                  <img src="../../assets/images/route420-icon.svg" id="homeLogo" />
                </Col>

              </Row>
            </Jumbotron>
            {/*<div>
              <NewsFeed />
            </div>*/}
            <form>
              <Input
                value={this.state.searchTerms}
                onChange={this.handleInputChange}
                name="searchTerms"
                placeholder="Search for a Product!"
              />
              <FormBtn
                disabled={!(this.state.searchTerms)}
                onClick={this.doProductSearch}
              >
                Find Product
              </FormBtn>
            </form>
            </Col>
            <Col size="md-2"></Col>
        </Row>
        <Row>
        <Col size="md-2"></Col>
        <Col size="md-8">
                {this.state.results.length ? (
                <div>
                <h4>Products Found</h4>
                        {this.state.results.map(product => (
                        <div key={product._id}>
                          <a href={"/product/" + product._id}><strong>{product.name}</strong></a> ({product.brand})   
                        </div>
                        ))}
                </div>
                    ) : (
                        <h4>No Results to Display</h4>
                    )}
          </Col>
          <Col size="md-2"></Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
