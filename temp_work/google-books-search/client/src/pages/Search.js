import React, { Component } from "react";
import SaveBtn from "../components/SaveBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";

import { Input, FormBtn } from "../components/Form";

import { ResultList, ResultItem } from "../components/Results";

class Search extends Component {
  state = {
    results: [],
    title: "",
    author: "",
    description: "",
    link: "",
    image: ""
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
  };



  doGoogleBooksSearch = event =>
  {
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
  };

  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-2"></Col>
          <Col size="md-8">
            <br />
            <Jumbotron>
                <img src="headerImg.png" alt=""/> <br />
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn
                disabled={!(this.state.title)}
                onClick={this.doGoogleBooksSearch}
              >
                Search Google Books
              </FormBtn>
            </form>
            </Col>
            <Col size="md-2"></Col>
        </Row>
        <Row>
        <Col size="md-2"></Col>
        <Col size="md-8">
                {this.state.results.length ? (
                <ResultList>
                        {this.state.results.map(result => (
                        <ResultItem key={result.link} 
                            title={result.title}
                            author={result.author}
                            description={result.description}
                            link={result.link}
                            image={result.image}
                        >
                            <SaveBtn onClick={() => this.saveBook(result)} />
                        </ResultItem>
                        ))}
                </ResultList>
                    ) : (
                        <h3>No Results to Display</h3>
                    )}
          </Col>
          <Col size="md-2"></Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
