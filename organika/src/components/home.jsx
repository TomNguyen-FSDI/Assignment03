import React, { Component } from 'react';
import Footer from './footer';
import './home.css';
import NavBar from './navBar';

class Home extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
            <NavBar cartBtn="btn-right"></NavBar>
            <div className="homepage" style={{backgroundImage: "url(/images/homepage.jpg)"}}>
            {/* <div className="homepage" style={{backgroundImage: "url(https://TomNguyen-FSDI.github.io/organika/images/homepage.jpg)"}}> */}
                <h1>Welcome to <span className="homepage-welcome">Organika</span></h1>
                <Footer cName="footer-cr-absolute"></Footer>
            </div> 
            </React.Fragment>
         );
    }
}
 
export default Home;