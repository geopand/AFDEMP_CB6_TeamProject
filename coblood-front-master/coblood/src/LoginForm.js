import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import { UserContext } from './UserContext';

class LoginForm extends React.Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit(event) {
    if (this.validateForm() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      fetch('/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state),
      })
        .then(function(response) {
          if (response.status >= 400) {
            throw new Error('Bad response from server');
          }
          return response.json();
        })
        .then(json => {   
            
          
          //store the user's data in local storage
          //to make them available for the next
          //user's visit
          localStorage.setItem('token',json.token);
          localStorage.setItem('userId',json.userId);
          localStorage.setItem('username',json.username);
          localStorage.setItem('roleInt',json.role.roleInt);
          localStorage.setItem('roleType',json.role.roleType);

          
          //use the setUserData function to change the context state
          //through the UserContext
          this.context.setUserData(json.token,json.userId,json.username,json.role.roleInt,json.role.roleType);

          this.props.history.push('/');
          })
        .catch(function(err) {
          console.log(err);
        });
    }
  }

  render() {
    let token = localStorage.getItem('token');
    if (token) {
      // Redirect
      return <h4 align="center">Welcome back</h4>;
    } else {
      return (
      
        <div>
          <Form onSubmit={e => this.handleSubmit(e)}>
            <Form.Group className="" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                onChange={this.handleChange}
                required
                placeholder="Username"
                autoComplete="off"
              />
              <Form.Control.Feedback type="invalid">
                Field is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="password"
                required
                placeholder="Password"
                autoComplete="off"
              />
              <Form.Control.Feedback type="invalid">
                Field is required
              </Form.Control.Feedback>
            </Form.Group>
            <Button className="col-lg btn-danger btn-lg mt-2" type="submit">
              Login
            </Button>
          </Form>
        </div>
      );
    }
  }
}

export default withRouter(LoginForm);