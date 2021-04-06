import React, { Component } from 'react';
import Footer from './footer';
import './about.css';
import NavBar from './navBar';

class About extends Component {
    state = {
        infoVisible: false
    }
    render() {
        return (
            <div>
                <NavBar cartBtn="btn-right"></NavBar>
                <div className="jumbotron">
                    {this.getNameInfo()}
                    {this.getDetailInfo()}
                    <hr className="my-4"></hr>
                    {/* {
                        this.state.infoVisible ?
                            (
                                <div>
                                    <label>Email: email@sdgku.edu</label>
                                    <label>Phone: 123 456 7890</label>
                                </div>
                            )
                            :
                            ("Click on the button to see more info")
                    } */}
                    {this.getPersonalInfo()}
                    <p className="lead">
                        <button className="btn btn-primary btn-lg" onClick={this.handleButtonClick}>More about me</button>
                    </p>
                </div>
                <Footer cName="footer-cr-absolute"></Footer>
            </div>
        );
    }

    getNameInfo = () => {
        if (this.state.infoVisible) {
            return (
                <p className="display-4">
                    Tom Nguyen
                </p>
            );
        } else {
            return (
                <p className="display-4">
                    The Developer
                </p>
            );
        }
    }

    getDetailInfo = () => {
        if (this.state.infoVisible) {
            return (
                <p className="lead">
                    Hi, I'm Tom. Please contact me by using the information below. 
                </p>
            );
        } else {
            return (
                <p className="lead">
                    This is an FSDI Project using React.
                </p>

            );
        }
    }

    getPersonalInfo = () => {
        if (this.state.infoVisible) {
            return (
                <div className="about-profile">
                    <img src="/images/profile picture.jpg" alt="profile.jpg"></img>
                    {/* <img src="https://TomNguyen-FSDI.github.io/organika/images/profile picture.jpg" alt="profile.jpg"></img> */}
                    <p className="">Email: Tommie_89@yahoo.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            );
        } else {
            return (
                <label>Click the button to see more info</label>
            );
        }
    };

    handleButtonClick = () => {
        this.setState({ infoVisible: !this.state.infoVisible });
    };

}

export default About;

/*
1 - catch click event
2 - call a function
3 - console.log("more info");
*/