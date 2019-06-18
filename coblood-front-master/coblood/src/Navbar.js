import React, { Component } from 'react';
import { Link, withRouter, NavLink } from "react-router-dom";
import { UserConsumer } from './UserContext';
import logoWhite from './img/logo-white.png';
import './css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt,faTint,faUsers } from '@fortawesome/free-solid-svg-icons';
import $ from "jquery";

const css = {
    fullWidth: {
        width:'100%'
    }
}


class NavMenu extends Component{
    state={
        numberOfUnreadMessages: 0
    }


    componentDidMount(){
            console.log("Navmenu component did mount");
            //Ajax call to fetch the number of Messages for the badge in Navbar
            fetch ('/user/messages/unread', {
                method: 'GET',
                headers: {'Content-Type': 'application/json', 'token': this.props.context.token},
            })
            .then((response)=>{
            return response.json() })
            .then(json => {
                this.setState({numberOfUnreadMessages: json.number})})
            .catch (function(error){
                console.log('Bad request or ' + error);
            })
    }

    


    render(){
        //This if-else statement renders the appropriate menu for the logged-in users or visitors
        if (this.props.context.username) {
            return(
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle active text-warning" to="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                    [{this.props.context.username}]
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <NavLink className="dropdown-item" to="/message">Messages &nbsp;{this.state.numberOfUnreadMessages > 0 ? <span className="badge badge-danger">{this.state.numberOfUnreadMessages}</span> : null } </NavLink>
                        <NavLink className="dropdown-item" to="/MyBloodRequests"> My Blood Requests </NavLink>
                        <NavLink className="dropdown-item" to="/logout">Log out&nbsp; <span><FontAwesomeIcon icon={faSignOutAlt} style={{ color: 'black' }} size="sm" /></span> </NavLink>
                    </div>
            </li>
            );
        }
        else {
            return (
                <React.Fragment>
                    <li className="nav-item"><NavLink to="/user/register" className="nav-link"> Register </NavLink></li>
                    <li className="nav-item"><NavLink to="/user/login" className="nav-link"> Login </NavLink></li>
                </React.Fragment>);
    
         };
    }
}

class NavMenuAdmin extends Component {

    render() {
        //This if-else statement renders the admin menu only when an admin is logged-in
        if(this.props.context.roleType==='Admin' && this.props.context.roleInt<2){
            return(
                <li className="nav-item">
                    <Link className=" btn btn-secondary text-white " to="/AdminPanel">
                    ADMIN PANEL <span><FontAwesomeIcon icon={faUsers} style={{ color: 'white' }} size="sm" /></span>
                    </Link>
                   
                </li>
            );
        }
        else {
            return null;
        }
    }
}


const BloodRequestButton = (props) => {
    //This if-else statement renders the button for blood-request creation to users that are logged-in
    if (props.context.username!==null){
        return (<li className="nav-item">
        <Link to="/request/submit" ><button className="btn btn-danger btn-sm mt-1"> <FontAwesomeIcon icon={faTint} style={{ color: 'white' }} size="lg" /> &nbsp;Create Blood Request </button></Link>
    </li>);
    }
    else {return null;}
}



class Navbar extends Component { 



    componentDidMount() {
        // On scroll-down-up --> changing the navbar color and icon-size
        $(document).ready(function () {
            $(window).scroll(function () {
              if ($(document).scrollTop() > 150) {
                  $('.navbar').addClass('change');
                //   $('.navbar .navbar-brand img').attr('src',logoWhite);
                  $('.navbar .navbar-brand img').attr('height', 45);
                  $('.navbar .navbar-brand img').attr('width', 'auto');
              } 
                  else {
                  $('.navbar').removeClass('change');
                //   $('.navbar .navbar-brand img').attr('src',logoWhite);
                $('.navbar .navbar-brand img').attr('height', 55);
                $('.navbar .navbar-brand img').attr('width', 'auto');
                  }
             });
        });
    }



    render (){
        return (
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" style={css.fullWidth}>
                    <Link className="navbar-brand ml-xl-5" to="/">
                        <img src={logoWhite} width="auto" height="55" alt='logo' />
                        <small className="ml-2 align-center text-white-50 "><p className="d-none d-md-inline">Blood donors community</p></small>
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
                        aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav ml-auto mr-xl-5">
                            
                          
                            <UserConsumer>
                                { context => <BloodRequestButton context={context}/>}
                            </UserConsumer>

                            <li className="nav-item"><NavLink to="/" exact className="nav-link"> Home </NavLink></li>
                            <li className="nav-item"><NavLink to="/about" className="nav-link"> About </NavLink></li>
                            <li className="nav-item"><NavLink to="/contactus" className="nav-link"> Contact </NavLink></li>
                            
                          

                            <UserConsumer>
                                { context => 
                                    <React.Fragment>
                                        <NavMenu context={context} />
                                        <NavMenuAdmin context={context}/>     
                                    </React.Fragment>
                                    }
                            </UserConsumer>
                            
                                          
                            <li className="nav-item">
                                <Link className="nav-link" to="/faq"><FontAwesomeIcon icon="question-circle" /> </Link>
                            </li> 
                            
                        </ul>
                    </div>
                 </nav>

        );
    }

}



export default withRouter(Navbar);
