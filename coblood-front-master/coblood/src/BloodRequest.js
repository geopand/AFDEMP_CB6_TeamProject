import React, { Component } from 'react';
import  { withRouter} from "react-router-dom";
import BloodRequestForm from "./BloodRequestForm";
import {UserConsumer } from './UserContext';


class BloodRequest extends Component {

  // scroll page on top 
    componentDidMount() {
      window.scrollTo(0, 0);
    }
  
    render(){
        return(
            <div className="floatbox_bg" style={{paddingTop:'80px'}}>
            {/* must be the outer div for applying the bg */}
            <div className="content">
            <div
                className="container"
                style={{paddingBottom: '10px', paddingTop: '80px'}}
            >
            <div
                id="requestBlood-form-container"
                className="mx-auto shadow-lg p-5 mb-5 bg-white rounded"
            >
              <h2>Submit Blood Request</h2>
                
                <UserConsumer>
                  { context => <BloodRequestForm context={context}/>}
                </UserConsumer>
            </div>
            </div>
            </div>
            </div>
        );
    }
}
export default withRouter(BloodRequest);


