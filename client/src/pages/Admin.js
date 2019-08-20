import React, { Component } from "react";
//import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
//import { List, ListItem } from "../components/List";
//import UserContext from "../utils/userContext";
//import JumboTester from "../components/JumboTester";


class Admin extends Component 
{
    state = {
        userID: "0",
        isAdmin: false,
        locations: [],
        stores: [],
        storeDataEdit: {},
        productDataEdit: {}
    };

    componentDidMount() 
    {
        this.loadData();
    }

    loadData = () => {

        // get user
        // userID: "0",
        var theCurrentUser = "0";
        var adminTF = false;
        if(JSON.parse(localStorage.getItem('currentUser')) != null)
        {
            //  -> put local storage data into state --- but state will not have data
            var lsUser = JSON.parse(localStorage.getItem('currentUser'));
            theCurrentUser = lsUser.userID;
            adminTF = lsUser.admin;
        }


        API.getLocations().then(res => {
            console.log("getLocations response:", res);

            var theStores = [];
            // put stores in sep arr
            for (var i = 0; i < res.data.length; i++)
            {
                for (var j = 0; j < res.data[i].stores.length; j++)
                {
                    theStores.push(res.data[i].stores[j]);
                }
            }

            this.setState(
            { 
                userID: theCurrentUser,
                isAdmin: adminTF,
                locations: res.data, 
                stores: theStores
            });
        }).catch(err => console.log(err));
    };

    render() 
    {
        if(this.state.userID === "0" || this.state.isAdmin === false)
        {
            return(
                <Container fluid>
                <Row>
                    <Col size="md-2"></Col>
                    <Col size="md-8"> 
                        <Jumbotron>
                            <h1>Admin Dashboard</h1>
                        </Jumbotron>
                        <br />
                        <div>
                            <strong>
                            <a href="/user">Must be Signed-In to access Admin Dashboard!</a>
                            </strong>
                        </div>
                        <br />
                        <div>
                            Only system administrators are allowed to access the Admin Dashboard.
                        </div>
                    </Col>
                    <Col size="md-2"></Col>
                </Row>
            </Container>
            );
        }
        else
        {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-2"></Col>
                    <Col size="md-8"> 
                        <Jumbotron>
                            <h1>Admin Dashboard</h1>
                        </Jumbotron>

                        <div>
                            <h2>User Management</h2>
                            <h4>Edit User</h4><br />
                            <h4>Add User</h4><br />
                        </div>
                        <br />
                        <div>
                            <h2>Location Management</h2>
                            <br />
                            <h4>Add Location</h4>
                            <form>
                            <strong>City: </strong>
                                    <input type="text" name="locationCity" />
                            <br />
                            <strong>State: </strong>
                                    <select name="locationState">
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                    <option value="DC">District of Columbia</option>
                                    <option value="MH">Marshall Islands</option>
                                </select>
                                <br />
                                <button
                                    disabled={!(this.state.email)}
                                    onClick={this.doSignIn}
                                    >
                                    Add Location
                                    </button>
                                </form>
                        </div>
                        <br />
                        <div>
                            <h2>Store Management</h2>
                            <br />
                            <h4>Edit Store</h4>
                            <form>
                                <strong>Select Store: </strong>
                                <select name="storeSelect">
                                {this.state.stores.map(store => (
                                <option key={store._id} value={store._id}>{store.name} ({store.city}, {store.state})</option>
                                ))}
                                </select>
                                <br />
                                <strong>Name: </strong>
                                <input type="text" name="storeName" />
                                <br />
                                <strong>Address Line 1: </strong>
                                <input type="text" name="store" />
                                <br />
                                <strong>Address Line 2: </strong>
                                <input type="text" name="store" />
                                <br />
                                <strong>City: </strong>
                                <input type="text" name="store" />
                                <br />
                                <strong>State: </strong>
                                <input type="text" name="store" />
                                <br />
                                <strong>Zip: </strong>
                                <input type="text" name="store" />
                                <br />
                                <strong>Description: </strong>
                                <input type="text" name="store" />
                                <br />
                                <button
                                disabled={!(this.state.email)}
                                onClick={this.doSignIn}
                                >
                                Submit Store Changes
                                </button>
                            </form>
                            <br />
                            <h4>Add Store</h4><br />
                        </div>
                        <br />
                        <div>
                            <h2>Product Management</h2>
                            <h4>Edit Product</h4><br />
                            <h4>Add Product</h4><br />
                        </div>
                    </Col>
                    <Col size="md-2"></Col>
                </Row>
            </Container>
        
        );
        }
    }
}

export default Admin;
