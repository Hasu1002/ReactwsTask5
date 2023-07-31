import React, {Component} from 'react';
import logo from '../Image/logo.jpg';
import '../App.css'

class About extends Component {
  render() {
    return (
      <div>
        <img src={logo} />
        <h1>Shopping is an activity in which a customer browses the available goods or services presented by one or more retailers with the potential intent to purchase a suitable selection of them.</h1>
      </div>
    )
  }
}
export default About;



