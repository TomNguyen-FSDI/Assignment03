import React, { Component } from 'react';
import Footer from './footer';
import './home.css';

class Home extends Component {
    state = {  }
    render() { 
        return (
            <div className="homepage" style={{backgroundImage: "url(/images/homepage.jpg)"}}>
                <h1>Welcome to <span className="homepage-welcome">Organika</span></h1>
                <Footer cName="footer-cr-absolute"></Footer>
            </div> 
         );
    }
}
 
export default Home;