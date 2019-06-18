import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


class Footer extends Component {

  render() {
    return (
        <div>
            <section id="footer" className='text-dark' >
                <div className="container pt-4">
                    <div className="row text-center text-xs-center text-sm-left text-md-left">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-4">
                            <ul className="list-unstyled quick-links">
                            <li><h1 style={{fontWeight:'800'}} className="text-white h6">Quick Links</h1></li>
                                <li><NavLink to="/about" className="text-white h6">About Us</NavLink> </li>
                                <li><NavLink to="/contactus" className="text-white h6">Contact Us</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-4">
                            <ul className="list-unstyled quick-links" >
                            <li><h1 style={{fontWeight:'800'}} className="text-white h6">Quick Links</h1></li>
                                <li><NavLink to="/about" className="text-white h6">Donate</NavLink></li>
                                <li><NavLink to="/faq" className="text-white h6">F.A.Q</NavLink></li>

                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-4 ">
                            <ul className="list-unstyled quick-links ">
                            <li><h1 style={{fontWeight:'800'}} className="text-white h6">Quick Links</h1></li>
                                <li><NavLink to="/privacyandterms" className="text-white h6" >Privacy and Terms</NavLink></li>
                                <li><NavLink to="/helpcenter" className="text-white h6">Help Center</NavLink></li>
                            </ul>
                        </div>
                    </div>


                </div>
                <div className="social">
                    <div className="container text-lg-center text-xs-left"> 
                        <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" className="btn-social"><FontAwesomeIcon icon={faFacebookSquare} style={{ color: 'white' }} size="lg" /></a>&nbsp;&nbsp;&nbsp;
                        <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" className="btn-social"><FontAwesomeIcon icon={faTwitter} style={{ color: 'white' }} size="lg" /></a>&nbsp;&nbsp;&nbsp;
                        <a href="mailto: info@coblood.gr?subject=Mail from Our Site" target="_blank" rel="noopener noreferrer" className="btn-social"><FontAwesomeIcon icon={faEnvelope} style={{ color: 'white' }} size="lg" /></a>
                        
                        </div>
                </div>
                        
            </section>
            <section className="copyright">
                <div className="container-fluid" >
                        <div className="row pb-1" style={{background:'#37474f'}}>
                            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center" style={{color:'#78909c'}}>
                                © {2018 +" - "  + new Date().getFullYear() }&nbsp;&nbsp;&nbsp;Team <span style={{color:'#cfd8dc'}}>coBlood</span>
                            </div>
                        </div>
                </div>
            </section>         
    </div>
    )
  }
}

export default Footer;