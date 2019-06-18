import React, { Component } from 'react';
import  { withRouter} from "react-router-dom";

import RegisterForm from "./RegisterForm";

class Register extends Component { 

  // scroll page on top 
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
    render(){
        return(
            /* must be the outer div for applying the bg */
            <div className= "floatbox_bg" style={{paddingTop:'80px'}}>
                <div className="content">
                    <div className="container" style={{paddingBottom:'10px', paddingTop:'80px'}}>
                        <div id="register-form-container"  className="mx-auto shadow-lg p-5 mb-5 bg-white rounded">
                            <h2>Join Us!</h2>
                                <RegisterForm/>
                            </div>
                        </div>
                   </div>
            </div>
       );
    }
}

export default withRouter(Register);