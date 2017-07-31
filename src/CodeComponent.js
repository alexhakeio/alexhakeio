import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './CodeComponent.css';

class CodeComponent extends Component {
  render() {
    const data = [
      {
        date: '07/29/2017',
        title: 'alexhakeio',
        description: 'A website built with react js and various modules to practice new things.',
        id: '11242'
      },
      {
        date: '07/29/2017',
        title: 'Planner',
        description: 'A light planning app to help keep my life organized!',
        id: '23532'
      },
      {
        date: '07/29/2017',
        title: 'Tracker',
        description: 'A light collaborative app that helps shifts communicate',
        id: '23423'
      },
      {
        date: '07/29/2017',
        title: 'ProMan',
        description: 'A robust but lightweight program management tool that helps keep track of themes, epics, stories, sprints, backlog, and story maps.',
        id: '23423'
      }
    ]
    return (
      <Grid className='pad-for-nav'>

      <Row>
        <Col sm={12}>
          <div className='post-title'>
            <h3>Projects</h3>
          </div>
        </Col>
      </Row>

        {data.map((d, index) => (
          <Row key={index}>
            <Col sm={12}>
              <div className="post-container">
                <h4>{d.title}</h4>
                <h5>{d.date}</h5>
                <p>{d.description}</p>
              </div>
            </Col>
          </Row>
        ))}
      </Grid>
    )
  }
}
export default CodeComponent;
