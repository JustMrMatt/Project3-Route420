import React, { Component } from "react";
//import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";


class Saved extends Component {
    state = {
        name: "",
        brand: "",
        description: "",
        type: []
    };

    componentDidMount() 
    {
        //console.log("window.location.href = " + window.location.href);
        // http://localhost:3000/store/5d474e210953e00dbc14734e
        var url = window.location.href;
        var urlArray = url.split("/");
        //console.log("urlArray" + urlArray);
        this.loadProduct(urlArray[urlArray.length - 1]);
    }

  loadProduct = (pid) => {
    API.getProduct(pid)
      .then(res => {
          console.log("getProduct response:", res);
            this.setState({ 
                name: res.data.name,
                brand: res.data.brand,
                description: res.data.description,
                type: res.data.type
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
                            <h1>Product Page</h1>
                        </Jumbotron>
                        
                        <h4>{this.state.name}</h4>
                       
                        <div>
                            {this.state.brand}
                        </div>
                        <div>
                            {this.state.description}
                        </div>
                        <div>
                            <h4>Related Terms (tags)</h4>
                            {this.state.type.length ? (
                                <div>
                                    {this.state.type.map(tag => (
                                        <div key={tag}> 
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div>No Tags</div>
                            )}
                        </div>
                      
                    </Col>
                    <Col size="md-2"></Col>
                </Row>
            </Container>
        );
    }
}

export default Saved;
