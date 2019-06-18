import React, { Component } from 'react';
import { withRouter, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaypal} from '@fortawesome/free-brands-svg-icons';




class About extends Component { 

// scroll page on top 
componentDidMount() {
    window.scrollTo(0, 0);
  }


render(){
    return(
        <div>
            <div className="container content" style={{paddingBottom:'10px', paddingTop:'160px'}}>     
                <div className="row">
                    <div className="col-xs-11 col-lg-12 ">
                        <p className="lead text display-3 mt-xs-5 mt-lg-0">
                            <div className="blockquote text-right">
                                <p className="mb-0">
                                    <em>You are somebody’s type, Please donate.</em>
                                </p>
                                <footer className="blockquote-footer">Anonymous </footer>
                            </div>
                            <br/>
                            Welcome to our community of <strong className="text-danger">blood donors</strong>
                        </p>
                        <p>
                            <strong>coBlood</strong> is a voluntary attempt to create an on-line community consisting of blood donors and patients.
                            Our main aim is to provide an on-line meeting-point where people in need of blood, platelets or bone marrow can put up blood requests 
                            for the public eye to see. Thus blood donors and people are motivated to help.
                        </p>
                        <p>Towards this aim, our site provides a free user account with a messaging system for the user to communicate with other users, whether they are
                            patients or blood donors.
                        </p>
                        <p>What coBlood brings to the table is a solution for creating a single well established and credible on-line spot where blood requests are put up 
                            and then shared as links to other on-line social media services. What coBlood is trying to accomplish is to create a more dynamic blood requests
                            format where people who want to help can immediately know if the blood request is still uncompleted.
                        </p>
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-xs-11 col-md-10">
                        <br/>
                        <br/>
                        <h3 className="display-4 text-center" >
                            Make a Donation
                        </h3>
                        <p className="lead text-center"> 
                            Support the effort of the coBlood's team and help find blood donors for people in need today.
                            Every support to coBlood helps to inform citizens about blood donation and voluntary donations.
                        </p>
                        <div className="text-center">
                            <NavLink to="#" id="red" role="button" className="btn btn-danger btn-lg text-white text-center " style={{backgroundColor: 'darkred'}}>
                                    <FontAwesomeIcon icon={faPaypal} style={{ color: 'white' }} size="1x"/> &nbsp;Donate
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
                        
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>      
        </div>
    );
}

}

export default withRouter(About);
