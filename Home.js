import React, {Component} from 'react';
import Shop1 from '../Image/Shop1.jpeg';
import Shop2 from '../Image/Shop2.jpg';
import Shop3 from '../Image/Shop3.jpeg';
import logo from '../Image/logo.jpg';
import './Home.css';
class Home extends Component {
  render() {
    return (
        <div>
            <img src={logo} alt='Logo' class='logo' />
            <h1 id='heading'>Shopping</h1>
            <div class="container">   
                <div class="box">
                    <div class="imgBox">
                        <img src= {Shop1} alt="Shop"/>
                    </div>
                    <div class="content">
                        <h2>Shopping gives happiness</h2>
                    </div>
                </div>
                <div class="box">
                    <div class="imgBox">
                        <img src= {Shop2} alt="Shop"/>
                    </div>
                    <div class="content">
                        <h2>Let's go shopping</h2>
                    </div>
                </div>
                <div class="box">
                    <div class="imgBox">
                        <img src= {Shop3} alt="Shop"/>
                    </div>
                    <div class="content">
                        <h2>Girls fav out</h2>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
export default Home;