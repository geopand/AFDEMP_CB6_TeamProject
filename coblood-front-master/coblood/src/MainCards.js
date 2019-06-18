import React from 'react';
import ekea_logo from './img/ekea_logo.png';
import ema_logo from './img/ema_logo.png';
import questionnaire from './img/questionnaire.png';
import map from './img/map.png';


const MainCards = () => {
    return( 
        <div>
            <div className="container text-left pb-5">
          <div className="row">
                    <div className="col-lg-3">
                        <div className="card">
                            <div className="card-body text-center">
                                <h5 className="card-title text-center">National Blood Donation Center</h5>
                                <img src={ekea_logo} width="auto" height="120" alt='ekea_logo' style={{align:'center'}}/>
                                <br/>
                                <br/>
                                    <p className="card-text">The official greek center for blood donations in Greece</p>
                                    <a href="http://ekea.gr/" target="_blank" rel="noopener noreferrer" className="btn btn-danger align-right">Visit</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card">
                            <div className="card-body text-center">
                                <h5 className="card-title text-center">Greek Blood Donor Registry</h5>
                                <img src={ema_logo} width="auto" height="120" alt='ekea_logo' style={{align:'center'}}/>
                                <br/>
                                <br/>
                                    <p className="card-text">The official blood donor registry in Greece</p>
                                    <a href="https://blooddonorregistry.gr/" target="_blank" rel="noopener noreferrer" className="btn btn-danger align-right">Visit</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card">
                            <div className="card-body text-center">
                                <h5 className="card-title text-center">Official questionnaire before a donation</h5>
                                <img src={questionnaire} width="auto" height="120" alt='ekea_logo' style={{align:'center'}}/>
                                <br/>
                                <br/>
                                    <p className="card-text">Before donating please read this questionnaire.</p>
                                    <a href="http://ekea.gr/wp-content/uploads/2013/06/%CE%95%CE%A1%CE%A9%CE%A4%CE%97%CE%9C%CE%91%CE%A4%CE%9F%CE%9B%CE%9F%CE%93%CE%99%CE%9F-%CE%91%CE%99%CE%9C%CE%9F%CE%94%CE%9F%CE%A4%CE%97.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-danger align-right">Visit</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card">
                            <div className="card-body text-center">
                                <h5 className="card-title text-center">Where can i donate blood?</h5>
                                <img src={map} width="auto" height="120" alt='ekea_logo' style={{align:'center'}}/>
                                <br/>
                                <br/>
                                    <p className="card-text">The oficial map of blood collection centers in Greece </p>
                                    <a href="http://ekea.gr/where-donate/" target="_blank" rel="noopener noreferrer" className="btn btn-danger align-right">Visit</a>
                            </div>
                        </div>
                    </div>
              
              </div>
          </div>
        </div>
    

        );
    
}

export default MainCards