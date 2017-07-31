import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class ContactComponent extends Component {
  render () {
    const data = [
      {
        email: 'hello@alexhake.io',
        description: "Feel free to send an email to the address below, or use one of the links in the footer to find me on social media. I am always happy to hear others, so please don't hesitate to contact me.",
        id: '23232'
      }
    ]
    return (
      <Grid className='pad-for-nav'>

      <Row>
        <Col sm={12}>
          <div className='post-title'>
            <h3>Contact</h3>
          </div>
        </Col>
      </Row>

        {data.map((d, index) => (
          <Row key={index}>
            <Col sm={12}>
              <div className="post-container">
                <p>{d.description}</p>
                <p>Email: {d.email}</p>
              </div>
            </Col>
          </Row>
        ))}
      </Grid>
    )
  }
}

export default ContactComponent;
