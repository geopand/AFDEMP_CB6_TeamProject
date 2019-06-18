import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import UserPanelBloodRequest from'./UserPanelBloodRequest';
import './css/style.css';


class MyBloodRequests extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        }

   render() {

       

       return ( 
            <div className="container" align="center" style={{width: '1000px', paddingBottom:'10px', paddingTop:'150px'}}> 
                <div >
                    <UserPanelBloodRequest/>
                </div>
            </div>
       );
   }
}
export default withRouter(MyBloodRequests);