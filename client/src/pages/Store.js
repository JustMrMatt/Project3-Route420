import React, { Component } from "react";
//import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { TextArea, FormBtn } from "../components/Form";
import DeleteBtn from "../components/DeleteBtn";
//import { List, ListItem } from "../components/List";


class Store extends Component {
    state = {
        currentUser: "0",
        newComment: "",
        storeID: "",
        name: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zip: "",
        description: "",
        products: [],
        storecomments: []
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    componentDidMount() 
    {
        console.log("window.location.href = " + window.location.href);
        // http://localhost:3000/store/5d474e210953e00dbc14734e
        var url = window.location.href;
        var urlArray = url.split("/");
        console.log("urlArray" + urlArray);
        this.loadStore(urlArray[urlArray.length - 1]);
    }

    loadStore = (storeId) => {
        var currentUserID = "0";
        //check for local storage
        if(JSON.parse(localStorage.getItem('currentUser')) != null)
        {
            var lsData = JSON.parse(localStorage.getItem('currentUser'));
            currentUserID = lsData.userID;
        }

        API.getStore(storeId)
        .then(res => {
            console.log("getStore response:", res);

                this.setState({ 
                    currentUser: currentUserID,
                    newComment: "",
                    storeID: res.data._id,
                    name: res.data.name,
                    addressLine1: res.data.addressLine1,
                    addressLine2: res.data.addressLine2,
                    city: res.data.city,
                    state: res.data.state,
                    zip: res.data.zip,
                    description: res.data.description,
                    products: res.data.products,
                    storecomments: res.data.storecomments
                });
            }
        )
        .catch(err => console.log(err));
    };

    submitComment = event => {
        event.preventDefault();
        // check value of current
        if (this.state.currentUser === "0")
        {
            // tell user they need to sign in
            console.log("SIGN IN TO COMMENT!")
        }
        else
        {
            var curDate = new Date(Date.now());
            var commentObj = {
                comment: this.state.newComment,
                created: curDate,
                updated: curDate,
                user: this.state.currentUser,
                store: this.state.storeID
            }

            console.log("=== NEW COMMENT SUBMMITED ===", commentObj);

            API.submitComment(commentObj, "store").then(res => 
            {
                // this.setState({ newComment: ""});

                /* 
                    Problem: newly added comments do not populate.
                    The comments are created in the storecomments collection
                    But the comment ID is not added to the store in the stores collection.
                */

                // res.data._id = id of new comment

                console.log("NEW COMMENT ADDED:", res);

                this.loadStore(this.state.storeID);
            });
        }
    }

    deleteComment = (commentID, e) => {
        //event.preventDefault();
        console.log("DELETE COMMENT:", commentID);
        console.log("e:", e);

        API.deleteComment(commentID, "store").then(res =>
        {
            console.log("COMMENT DELETED:", res);

            this.loadStore(this.state.storeID);
        });
    }

    render() {
        var theCurrentUser = this.state.currentUser;
        return (
            <Container fluid>
                <Row>
                    <Col size="md-2"></Col>
                    <Col size="md-8">
                        <Jumbotron>
                            <h1>Store Page</h1>
                        </Jumbotron>
                        <h4>{this.state.name}</h4>
                        <div>
                            {this.state.addressLine1} <br />
                            {this.state.addressLine2.length ? (
                                <span>
                                    {this.state.addressLine2} <br />
                                </span>
                                ) : (
                                    <span></span>
                                )}
                            {this.state.city}, {this.state.state} {this.state.zip}
                        </div>
                        <div>{this.state.description}</div>

                        <div>
                            <h4>Available Products</h4>
                            {this.state.products.length ? (
                                <div>
                                    {this.state.products.map(product => (
                                        <div key={product._id}> 
                                            <strong><a href={"/product/" + product._id}>{product.name}</a></strong> ({product.brand})
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div>No Products</div>
                            )}
                        </div>

                        <div>
                            <h4>Community Discussion</h4>
                            <div>
                                <form>
                                    <TextArea
                                    value={this.state.newComment}
                                    onChange={this.handleInputChange}
                                    name="newComment"
                                    placeholder="Provide feedback..."
                                    />
                                    <FormBtn
                                    disabled={!(this.state.newComment)}
                                    onClick={this.submitComment}
                                    >
                                    Submit Comment
                                    </FormBtn><br /><br />
                                </form>
                            </div>
                            {this.state.storecomments.length ? (
                                <div>
                                    {this.state.storecomments.map(comment => (
                                        <div key={comment._id}> 
                                            <strong>{comment.user} says...</strong><br /> 
                                            {comment.comment}<br />
                                            Posted: {comment.updated}
                                            {theCurrentUser === comment.user ? 
                                                <div>
                                                    <DeleteBtn onClick={(e) => this.deleteComment(comment._id, e)}>Delete</DeleteBtn>
                                                </div> : ''}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div>No Comments</div>
                            )}
                        </div>
                    </Col>
                    <Col size="md-2"></Col>
                </Row>
            </Container>
        );
    }
}

export default Store;
