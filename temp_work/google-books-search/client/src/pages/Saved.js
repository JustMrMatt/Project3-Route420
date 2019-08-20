import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


class Saved extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    link: "",
    image: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => {
          console.log("getBooks response:", res);
            this.setState({ 
                books: res.data, 
                title: "", 
                author: "", 
                description: "",
                link: "",
                image: ""
            });
        }
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };





render() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-2"></Col>
                <Col size="md-8">
                <Jumbotron>
                    <h1>Books You Have Saved</h1>
                </Jumbotron>
                <div>
                    {this.state.books.length ? (
                    <List>
                        {this.state.books.map(book => (

<ListItem key={book._id} 
title={book.title}
author={book.author}
description={book.description}
link={book.link}
image={book.image}
>
                            <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                        </ListItem>
                        ))}
                    </List>
                    ) : (
                    <h3>No Results to Display</h3>
                    )}
                </div>
            {/* 
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
            
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            */}
          </Col>
          <Col size="md-2"></Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
