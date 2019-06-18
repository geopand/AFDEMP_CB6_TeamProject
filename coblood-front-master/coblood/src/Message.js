import React, { Component } from 'react';
import { faTrashAlt,faPaperPlane,faInbox}  from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ComposeMessage from "./ComposeMessage";
import Inbox from "./Inbox";
import SentMessage from "./SentMessage";
import Trash from './Trash';


class Message extends Component {






    render() {
        return (
            <div>
                <div className="container content" style={{paddingBottom:'10px', paddingTop:'175px'}}>
                    <div className="row ">
                        <div className="col-2">
                            <div className="nav flex-column" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a className="nav-link btn btn-warning" id="v-pills-home-tab" data-toggle="pill"
                                   href="#v-pills-composeMessage" role="tab" aria-controls="v-pills-composeMessage" aria-selected="false" style={{padding:'.9em 2.4em'}}><strong>Compose</strong></a>

                                <a className="nav-link btn btn-danger active" id="v-pills-profile-tab" data-toggle="pill"
                                   href="#v-pills-inbox" role="tab" aria-controls="v-pills-inbox" aria-selected="false" style={{padding:'.9rem 2.4rem'}}>
                                    <span><FontAwesomeIcon icon={faInbox} style={{ color: 'white', marginRight:'0.5rem' }} size="1x" /></span>Inbox</a>

                                 <a className="nav-link btn btn-danger" id="v-pills-messages-tab" data-toggle="pill"
                                     href="#v-pills-sentMessages" role="tab" aria-controls="v-pills-sentMessages" aria-selected="false" style={{padding:'.9rem 2.4rem'}}>
                                     <span><FontAwesomeIcon icon={faPaperPlane} style={{ color: 'white',marginRight:'0.5rem'  }} size="1x" /></span>Sent</a>

                                <a className="nav-link btn btn-danger" id="v-pills-settings-tab" data-toggle="pill"
                                   href="#v-pills-trash" role="tab" aria-controls="v-pills-trash" aria-selected="false" style={{padding:'.9rem 2.4rem'}}>
                                   <span><FontAwesomeIcon icon={faTrashAlt} style={{ color: 'white',marginRight:'0.5rem'  }} size="1x" /></span>Trash</a>
                            </div>
                         </div>
                        
                        <div className="col-10" style={{marginTop:'-230px',marginLeft:"200px"}}>
                            <div className="tab-content" id="v-pills-tabContent">
                            <ComposeMessage/>
                                <Inbox/>
                                <SentMessage/>
                                <Trash />
                

                             </div>
                         </div>
                    </div>
                </div>
            </div>



        )
    }
}


export default Message;