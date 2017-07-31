import React, { Component } from 'react';
import './FooterComponent.css';
import { Navbar , NavItem , Nav } from 'react-bootstrap';
const FA = require('react-fontawesome');


class FooterComponent extends Component {
  render() {
    const sm_list = [
    {
    icon: 'twitter-square',
    url: 'https://twitter.com/alexhakeio'
    },
    {
      icon: 'github-square',
      url: 'https://github.com/alexhakeio'
    },
    {
      icon: 'linkedin-square',
      url: 'https://linkedin.com/in/alex-naber'
    },
    {
      icon: 'youtube-square',
      url: 'https://www.youtube.com/channel/UCCiZmxGf9-jctKH-ovuaPeQ?view_as=subscriber'
    },
    {
      icon: 'facebook-square',
      url: 'https://www.facebook.com/alex.hake.3998'
    },
    {
      icon: 'google-plus-square',
      url: 'https://plus.google.com/u/0/115161396667042283202'
    }
  ]

    return (
      <Navbar fixedBottom>
        <Nav pullRight>
          {sm_list.map((platform, index) => (
            <NavItem key={index} href={platform.url} target='_blank'><FA name={platform.icon} size='2x'/></NavItem>
          ))}
        </Nav>
      </Navbar>
    )
  }
}

export default FooterComponent;
