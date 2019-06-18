import React, {Component} from 'react';
import ReactTable from 'react-table';
import { UserContext } from './UserContext';
import $ from "jquery";

class GetMessagesFromDb extends Component {

    static contextType = UserContext;
    
    constructor(props) {
       super(props)
       this.state = {
           messages: []
       }
   }


   componentDidMount() {

        fetch ('/admin/messages', {
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





   render() {

       const columns = [
           {
               Header: "#",
               accessor: "messageId",
               width: 80,
               maxWidth: 100,
               minWidth: 100
           },
           {
               Header: "From",
               accessor: "sender",
               width: 80,
               manWidth: 100,
               minWidth: 100
           }, {
               Header: "To",
               accessor: "receiver",
               width: 80,
               manWidth: 100,
               minWidth: 100
           }, {
               Header: "Message",
               accessor: "messageData",

               maxWidth: 1000,
               minWidth: 100,
               className: "text-left pl-1"
           }, {
               Header : "Date",
               accessor: "dateInfo",

               width: 190,
            //    maxWidth: 200,
               minWidth: 100
           }, {
               Header: "X By Sender",
               accessor: "deleteBySender",

            //    width: 100,
               maxWidth: 100,
               minWidth: 100
           },
           {
               Header: "X By Receiver",
               accessor: "deleteByReceiver",

            //    width: 150,
               maxWidth: 120,
               minWidth: 100
           },
           {
               Header: "X By Admin",
               accessor: "deleteByAdmin",
               maxWidth: 100,
            //    width: 150,
               minWidth: 100

           },
           {
               Header:"Action",
               Cell: row=>{
                   return(
                       <button  className="btn btn-danger btn-sm"
                                onClick={()=> {
                                    this.deleteMessage(row.original.messageId);

                                }}
                       >Delete</button>

                   )
               },
               sortable:false,
               filterable:false,
               width:75
           }
       ]


       return (
           <div className="tab-pane fade" id="v-pills-settings" align="center" width="1000px" role="tabpanel"
                aria-labelledby="v-pills-settings-tab">


               <ReactTable
                   columns={columns}
                   data={this.state.messages}
                   filterable
                   defaultPageSize={5}
                   pageSizeOptions={[5, 10, 20, 50]}
                   >


               </ReactTable>
           </div>
       )
   }


}export default GetMessagesFromDb;