import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class AboutComponent extends Component {
  render () {
    const data = [
      {
        name: 'Alex Hake',
        interests: 'Programming, Web Design, Cars, Computers, IOT, AWS',
        description: "Currently work at a large online retailer in a tech role. I'd like to get more involved with software developement and technical project management, so I am working to become proficient in javascript and all things related, such as Node, React, Angular4, etc... and how software developement teams work together to create great customer centric products!",
        id: '23232'
      }
    ]
    return (
      <Grid className='pad-for-nav'>

      <Row>
        <Col sm={12}>
          <div className='post-title'>
            <h3>About</h3>
          </div>
        </Col>
      </Row>

        {data.map((d, index) => (
          <Row key={index}>
            <Col sm={12}>
              <div className="post-container">
                <h4>{d.name}</h4>
                <p>Interests: {d.interests}</p>
                <p>{d.description}</p>
              </div>
            </Col>
          </Row>
        ))}
      </Grid>
    )
  }
}

export default AboutComponent;
