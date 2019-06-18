import React  from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function HelpCenter() {

   window.scrollTo(0, 0);

   return (
           <div>
               <div className="container content text-center" style={{paddingBottom: '10px', paddingTop: '160px'}}>
                   <p className="lead text display-4">
                       <strong className="text-danger">Help Center</strong>
                   </p>

                   <h2>Contact Us</h2>
                   <p>If you have any questions, please contact us:</p>
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