import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import './App.css';
import './css/style.css';
import Navbar from './Navbar';
import Main from './Main';
import Faq from './Faq';
import About from './About'
import { library } from '@fortawesome/fontawesome-svg-core';
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import Login from'./Login';
import Register from './Register';
import BloodRequest from './BloodRequest';
import Footer from './Footer';
import ErrorPage from './ErrorPage';
import Logout from './Logout';
import  Message from'./Message';
import PrivacyAndTerms from './PrivacyAndTerms';
import ContactUs from './ContactUs';
import { UserProvider } from './UserContext';
import HelpCenter from './HelpCenter';
import AdminPanel from './AdminPanel';
import MyBloodRequests from './MyBloodRequests';



library.add(faQuestionCircle);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      token: props.userData.token,
      userId :  props.userData.userId,
      username: props.userData.username,
      roleInt: props.userData.roleInt,
      roleType : props.userData.roleType,
      setUserData : (token,userId,username,roleInt,roleType) => {this.setState({
        token: token,
        userId :  userId,
        username: username,
        roleInt: roleInt,
        roleType : roleType
        })
      }
  }

  }


  //Method for denying the access of not logged-in visitors to specific URLs
  renderProtectedComponent(ProtectedComponent){
    if (this.state.username!==null) {
      return (props) => <ProtectedComponent {...props} />;
    }
    else {
      return (props) => <Redirect to='/' />;
    }
  }

//Method for denying the access of plain users to the Admin URLs
  renderProtectedAdminComponent(ProtectedComponent){
    if (this.state.roleType==="Admin") {
      return (props) => <ProtectedComponent {...props} />;
    }
    else {
      return (props) => <Redirect to='/' />;
    }
  }



  render() {

    return (
      //Using the Context provider to pass-down the info of the user stored in Local Storage
      <UserProvider value={this.state}>
          <Router>
                    <Navbar />
                    <Switch>
                      <Route path="/" exact component={Main} />
                      <Route path="/about" component={About} />
                      
                      <Route path="/faq" component={Faq} />
                      <Route path="/helpcenter" component={HelpCenter} />
                      <Route path="/message" render={this.renderProtectedComponent(Message)}/>
                      <Route path="/logout" render={this.renderProtectedComponent(Logout)}/>
                      <Route path="/MyBloodRequests" render={this.renderProtectedComponent(MyBloodRequests)}/>
                      <Route path="/AdminPanel" render={this.renderProtectedAdminComponent(AdminPanel)}/>
                      <Route path="/user/login" component={Login} />
                      <Route path="/user/register" component={Register} />
                      <Route path="/request/submit" render={this.renderProtectedComponent(BloodRequest)} />
                      <Route path="/privacyandterms" component={PrivacyAndTerms} />
                      <Route path="/contactus" component={ContactUs} />
                      <Route component={ErrorPage} />
                    </Switch>
                    <Footer />
        </Router>
    </UserProvider>
    );
  }
}

export default App;
