//imrc
import React, { Component } from 'react';
import './footer.css';
//cc
class Footer extends Component {            
    render() { 
        return (  
            <React.Fragment>
                <div className={this.props.cName}>
                    2021 All rights reserved by Tom Nguyen
                </div>
                {/* <label className="footer-name">returning more than one tag</label> */}
            </React.Fragment>
        );
    }
}
 
export default Footer;