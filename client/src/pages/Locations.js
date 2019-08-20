import React, { Component } from "react";
//import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import NewsFeed from "../components/NewsFeed";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
//import UserContext from "../utils/userContext";
//import JumboTester from "../components/JumboTester";


class Locations extends Component {
  state = {
    locations: []
  };

  componentDidMount() {

    this.loadLocations();
  }

  loadLocations = () => {
    API.getLocations()
      .then(res => {
          console.log("getLocations response:", res);
            this.setState({ 
                locations: res.data, 
            });
        }
      )
      .catch(err => console.log(err));
  };

render() {
    return (
     
        <Container fluid>
            <Row>
                <Col size="md-2"></Col>
                <Col size="md-8">
                    
                    <Jumbotron>
                      <h1>All Locations</h1>
                    </Jumbotron>
                  
                    <div>
                    {this.state.locations.length ? (
                        <div>
                        {this.state.locations.map(location => (
                            <div key={location._id}> 
                                <strong>{location.city}, {location.state}</strong>
                                {location.stores.length ? (
                                    <div>
                                    {location.stores.map(store => (
                                        <div key={store._id}>
                                            <strong><a href={"store/" + store._id}>{store.name}</a></strong><br />
                                            {store.addressLine1}<br />
                                            {store.city}, {store.state} {store.zip}
                                        </div>
                                    ))}
                                    </div>
                                    ) : (
                                    <div>No Stores for location</div>
                                    )}
                            </div>
                        ))} 
                        </div>
                    ) : (
                    <h3>No Locations to Display</h3>
                    )}
            </div>


          </Col>
          <Col size="md-2"></Col>
        </Row>
      </Container>
      
    );
  }
}

export default Locations;
