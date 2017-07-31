import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './MainComponent.css';

class MainComponent extends Component {
  render() {

    return (
      <Grid className="pad-for-nav">
        <Row>
          <Col sm={12}>
           <div className="main-container">
            <h2>Hello.</h2>
             <p>
             Welcome to my slice of the internet. This site is where I keep track of the things I do. Currently it is uses
             react js with some standard modules like react-bootstrap, react-router-dom, etc... Feel free to browse around and send me an email or
             find me on social media if you have a question. Thanks!
             </p>
           </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default MainComponent;
