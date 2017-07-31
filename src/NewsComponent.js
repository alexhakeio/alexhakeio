import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './NewsComponent.css';

class NewsComponent extends Component {
  render() {
    const data = [
      {
        date: '07/29/2017',
        title: 'React JS Adventures',
        post: 'This website is built with react js, and it is the first real world thing I have done in react. This is a test "post" to handle some simple data. Hope it goes well!',
        id: '11242'
      },
      {
        date: '07/29/2017',
        title: 'React JS Adventures pt 2',
        post: 'If you are seeing this then I have successfully used the map function to display some data!',
        id: '23532'
      }
    ]
    return (
      <Grid className='pad-for-nav'>

      <Row>
        <Col sm={12}>
          <div className='post-title'>
            <h3>News</h3>
          </div>
        </Col>
      </Row>

        {data.map((d, index) => (
          <Row key={index}>
            <Col sm={12}>
              <div className="post-container">
                <h4>{d.title}</h4>
                <h5>{d.date}</h5>
                <p>{d.post}</p>
              </div>
            </Col>
          </Row>
        ))}
      </Grid>
    )
  }
}
export default NewsComponent;
