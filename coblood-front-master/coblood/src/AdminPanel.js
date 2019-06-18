import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import GetAllUsers from "./GetAllUsers";
import GetAllBloodRequest from './GetAllBloodRequest';
import GetMessagesFromDb from'./GetMessagesFromDb';
// import CreateUserByAdmin from "./CreateUserByAdmin";

class AdminPanel extends Component {

// scroll page on top
   componentDidMount() {
       window.scrollTo(0, 0);
   }

   render() {


       return (
           <div className="content container-mailbox mx-1" style={{paddingBottom: '10px', paddingTop: '180px'}}>
               <div className="row">
                   <div className="col-2">
                       <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                            aria-orientation="vertical">
                           <a className="nav-link active btn btn-secondary" id="v-pills-profile-tab" data-toggle="pill"
                              href="#v-pills-profile"
                              role="tab" aria-controls="v-pills-profile" aria-selected="false">All Users in Database</a>
                           <a className="nav-link btn btn-secondary" id="v-pills-messages-tab" data-toggle="pill"
                              href="#v-pills-messages"
                              role="tab" aria-controls="v-pills-messages" aria-selected="false">All BloodRequests in Database</a>
                           <a className="nav-link btn btn-secondary" id="v-pills-settings-tab" data-toggle="pill"
                              href="#v-pills-settings"
                              role="tab" aria-controls="v-pills-settings" aria-selected="false">All Messages in Database</a>
                       </div>
                   </div>
                   <div className="col-10">
                       <div className="tab-content" id="v-pills-tabContent">
                           <GetAllUsers/>
                           <GetAllBloodRequest/>
                           <GetMessagesFromDb/>


                       </div>
                   </div>
               </div>
           </div>

       );
   }

}

export default withRouter(AdminPanel);