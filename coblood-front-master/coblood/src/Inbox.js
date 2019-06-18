import React, {Component} from 'react';
import ReactTable from 'react-table'
import { UserContext } from './UserContext';
import $ from "jquery";

import 'react-table/react-table.css'


class Inbox extends  Component{
    
    static contextType = UserContext;


    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        fetch ('/user/messages/received', {
        method: 'GET',
        headers: {'token': this.context.token}
             })
        .then((response) =>  response.json() )
        .then(messages => {
            this.setState({messages: messages})})
        .catch (function(error){
            console.log('Bad request or ' + error);
        })
    }


    //Removes  message from  UI by setting the state
    removeMessageFromUI = (messageId) =>{
        const newMessages = this.state.messages.filter(message => message.messageId!==messageId);
            console.log(newMessages);
            this.setState({messages: newMessages});
    }


    deleteMessage = (messageId) => {

    //Ajax call to delete the message from the database (persistency) and on success
            let url= `/user/messages/delete/${messageId}`;
            $.ajax({
                url: url,
                type: 'POST',         
                headers: {'token': this.context.token },
                success: this.removeMessageFromUI(messageId)
            })
            .catch( function(e){
                alert("Message not Deleted! ");
            });
        }

    


    render(){

        const columns=[
            {Header: '#',
            width:50,
            Cell: (row) => {
                return <div className="text-center h6">{row.index+1}</div>;
            }
            },
            {
                Header:"From",
                accessor:"sender",
                sortable: true,
                width:100,
                manWidth:100,
                minWidth:100
            },
             {
                Header: "Message",
                accessor: "messageData",
                sortable: false,
                resizable:true,
                maxWidth:700,
                minWidth:530
            },
            {
                Header: "Date",
                accessor: "dateInfo",
                sortable: true,
                width:160,
            },
            {
                Header:"Action",
                Cell: row=>{
                    return(
                        <button  className="btn btn-danger btn-sm"
                            onClick={()=> {
                                this.deleteMessage(row.original.messageId);
                            }}>
                            Delete
                        </button>

                    )
                },
                sortable:false,
                filterable:false,
                width:75,
                
            }
        ]


        return(
            <div className="tab-pane fade show active" id="v-pills-inbox" role="tabpanel"
                 aria-labelledby="v-pills-profile-tab">

                <ReactTable
                    columns={columns}
                    data={this.state.messages}
                    filterable
                    defaultPageSize={10}
                    pageSizeOptions={[10, 20, 50]}>
                </ReactTable>
            </div>
        )
    }
}
export default Inbox;