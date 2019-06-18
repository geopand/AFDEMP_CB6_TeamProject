import React, { Component } from 'react'
import {Form, Col}from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import  { withRouter} from "react-router-dom";
import { UserContext } from './UserContext';


class ComposeMessage extends Component {
	static contextType = UserContext;

    constructor(props){
        super(props)
        this.state={
            to:null,
            // subject:'',
            message:null
        }
        this.handleChange=this.handleChange.bind(this)
    }

    componentDidMount() {
        window.scrollTo(0, 0);
      }

      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value,
        });
      };

    handleSubmit(event){
        event.preventDefault()
        fetch('/user/messages/send', {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'token': this.context.token},
                body: JSON.stringify(this.state),
        })
        .then(function(response) {
                if (response.status >= 400) {
                    throw new Error('Bad response from server');
                }
                return response.json();
        })
        .then(this.setState({to:null, message:null}))
        .then(this.forceUpdate())
        .then(this.props.history.push('/'))
        .catch(function(err) {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="tab-pane fade" id="v-pills-composeMessage" role="tabpanel"
                 aria-labelledby="v-pills-home-tab">
                 <div className="container">
                 <div className="row">
                 <div className="col-2">
                <div className="">
                    <Form onSubmit={e => this.handleSubmit(e)} style={{width: '500px'}}>
                        <Form.Group as={Col}  controlId="to">
                            <Form.Label>To:</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                placeholder="Enter username"
                                onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="message" >
                            <Form.Label>Message:</Form.Label>
                            <Form.Control  as="textarea" rows="4"
                                type="text"
                                onChange={this.handleChange}/>
                        </Form.Group>                      
                        <div className="text-right">
                            <Button className=" btn-danger mt-2 mr-3" type="submit">
                            Send
                            </Button>
                        </div>
                    </Form>
                </div>
                </div>
                </div>
                </div>
            </div>
        );
    }
}
export default withRouter(ComposeMessage);