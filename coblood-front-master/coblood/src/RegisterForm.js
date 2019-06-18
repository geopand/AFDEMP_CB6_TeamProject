import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      password: null,
      confirmPassword: null
    };

  }

  validateForm() { 
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
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
      // console.log(this.state);

      fetch('/register', {
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
        .then( () => this.props.history.push('/') )
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  renderForm() {
    return (
      <div className="">
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
          <Form.Group className="" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              onChange={this.handleChange}
              required
              placeholder="Email"
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
          <Form.Group className="" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="password"
              required
              placeholder="Confirm password"
              autoComplete="off"
            />
            <Form.Control.Feedback type="invalid">
              Field is required
            </Form.Control.Feedback>
          </Form.Group>
           
          <div key="terms" className="mb-3">
            <Form.Check
                custom
                required
                inline
                label="Agree to Terms and Conditions"
                feedback="You must agree before submitting."
                id="terms"
            />
          </div>
          
          <Button className="col-lg btn-danger btn-lg" type="submit">
            Register
          </Button>
        </Form>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderForm()}
        {this.state.password !== this.state.confirmPassword &&
        this.state.confirmPassword !== null ? (
          <div className="alert alert-warning fade show mt-4" role="alert">
            Passwords do not match, please check for typos.
          </div>
        ) : null}
      </div>
      
    );
  }
}

export default withRouter(RegisterForm);
