import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactUs() {
    window.scrollTo(0, 0);

  return (
        <div>
            <div className="container content text-center" style={{paddingBottom:'10px', paddingTop:'160px'}}>     
                <blockquote class="blockquote text-right mb-5">
                    <p class="mb-0"><em>
                        Blood can circulate forever if you keep donating it.</em>
                    </p>
                    <footer class="blockquote-footer">Anonymous </footer>
                </blockquote>
                <p className=" text display-3 mt-4">
                    We'd love to hear from you!
                </p> 
                <p>A member of our team is on standby waiting to assist you.
                    <br/>
                     Let us know how we can help by sending us a message!
                </p>
                <br/>
                <br/>
                <h5 className="link-muted">
                    <FontAwesomeIcon  icon={faEnvelope} style={{ color: 'red' }} size="1x" /> 
                    <a  className="text-reset" href="mailto: info@coblood.gr?subject=Mail from Our Site"> 
                         &nbsp;  info@coblood.gr 
                    </a>
                </h5>
            </div>
         </div>
  )
}
