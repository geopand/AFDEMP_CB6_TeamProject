import React, {Component} from "react";
import { Button, Form, Col } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

 class BloodRequestForm extends Component {

     constructor(props) {
         super(props);
         this.state = {
                 ownerId: null,
                 pFirstName: null,
                 pLastName: null,
                 pFatherName: null,
                 contactEmail: null,
                 contactPhone: null,
                 hName: null,
                 hZipCode: null,
                 needType: null,
                 bloodType: null,
                 compatibleNeed: 0,
             };
     }

     
    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value,
        });
      };

    
     handleSubmit(event) {
        event.preventDefault();
          fetch('/user/requests/submit', {
             method: 'POST',
             headers: {'Content-Type': 'application/json', 'token': this.props.context.token},
             body: JSON.stringify(this.state)
             
         }).then(function (response) {
             if (response.status >= 400) {
                 throw new Error("Bad response from server");
             }
             return response.json();
             
         }).then(this.props.history.push('/'))
         .catch(function (err) {
             console.log(err)
         });
     }


    render() {
        return (
        <Form onSubmit={event => this.handleSubmit(event)}>
            <Form.Row>
                <Form.Group as={Col} controlId="pFirstName">
                    <Form.Label>Patient's First Name</Form.Label>
                    <Form.Control   onChange={this.handleChange} required autoComplete="off" type="text" placeholder="Enter  First Name" />
                </Form.Group>
                <Form.Group as={Col} controlId="pLastName">
                    <Form.Label>Patient's Last Name</Form.Label>
                    <Form.Control   onChange={this.handleChange} required autoComplete="off" type="tetx" placeholder="Enter Last Name" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="pFatherName">
                    <Form.Label>Patient's Father Name</Form.Label>
                    <Form.Control   onChange={this.handleChange} required autoComplete="off" type="text" placeholder="Enter  Father Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="contactEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control   onChange={this.handleChange} required autoComplete="off" type="email" placeholder="Enter Email" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="contactPhone">
                    <Form.Label>Patient's phone number:</Form.Label>
                    <Form.Control   onChange={this.handleChange} required autoComplete="off" type="text" placeholder="Enter phone number:" />
                </Form.Group>
                <Form.Group as={Col} controlId="hName">
                    <Form.Label>Hospital to which the patient is admitted:</Form.Label>
                    <Form.Control onChange={this.handleChange} required autoComplete="off" type="text" placeholder="Enter hospital's name" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="hZipCode">
                    <Form.Label>Hospital's area code:</Form.Label>
                    <Form.Control onChange={this.handleChange} required autoComplete="off" type="text" placeholder="Enter  the hospital's 5-digit zip code " />
                </Form.Group>
                <Form.Group as={Col} controlId="needType">
                    <Form.Label>The Patient is need for:</Form.Label>
                    <Form.Control   onChange={this.handleChange} required autoComplete="off"  as="select">
                        <option>Make a selection</option>
                        <option>Blood</option>
                        <option>Platelets</option>
                        <option>Bone marrow</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="bloodType">
                    <Form.Label>Patient's Blood Type:</Form.Label>
                    <Form.Control onChange={this.handleChange} required autoComplete="off" as="select">
                        <option>Make a selection</option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        <option>0+</option>
                        <option>0-</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <div key="compatibleNeed" className="mb-3">
                <Form.Check
                    custom
                    inline
                    label="Request only compatible blood types"
                    feedback="You must agree before submitting."
                    id="compatibleNeed"
                />
          </div>
            <Button className="col-lg btn-danger btn-lg" type="submit">
                Submit Blood Request
            </Button>
        </Form>
        );
    }
}
export default withRouter(BloodRequestForm);