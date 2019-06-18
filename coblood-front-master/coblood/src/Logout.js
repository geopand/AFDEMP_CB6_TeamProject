import React from 'react';
import { UserContext } from './UserContext';
import { withRouter } from "react-router-dom";
import pika from './img/logout_pika.gif'

class Logout extends React.Component {
    
    static contextType = UserContext;
    
    doLogout() {
        localStorage.clear();
        this.context.setUserData(null, null,null,null,null,);
        this.props.history.push('/');
    }
    
    componentDidMount() {
        setTimeout(this.doLogout.bind(this), 2000);

    }
    
    render() {
        
        return (
          <div  style={{paddingTop:'80px',background: "linear-gradient(to top right, rgba(104, 17, 17, 0.9) 10%, rgba(192, 51, 65, 0.9) 65%, rgba(252, 63, 6, 0.9) 125%"}}>
            <div className="content">
                <div className="container text-center" style={{paddingBottom: '10px', paddingTop: '180px'}}>
                  <div className="alert alert-warning" role="alert">
                      <strong>Loggin out....</strong>
                  </div>
                  <img src={pika} alt="Pickachu waving goodbye"/>
                </div>
            </div>
      </div>
        
        );
    }
  }
  export default withRouter(Logout);