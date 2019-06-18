import React, { Component } from 'react'
import ReactTable from 'react-table'
import { UserContext } from './UserContext';
import $ from "jquery";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTint } from '@fortawesome/free-solid-svg-icons';



class UserPanelBloodRequest extends Component {

    static contextType = UserContext;
    
    constructor(props) {
       super(props);
       this.state = {
           requests: []
       }
   }



   
   componentDidMount() {

       fetch ('/user/requests/myrequests', {
        method: 'GET',
        headers: {'token': this.context.token}
        })
        .then((response) =>  response.json() )
        .then(requests => {
            this.setState({requests: requests})})
        .catch (function(error){
            console.log('Bad request or ' + error);
        })
   }
   
   removeRequestFromUI = (requestId) =>{
       const newRequests = this.state.requests.filter(request => request.requestId!==requestId);
       console.log(newRequests);
       this.setState({requests: newRequests});
   }


   deleteRequest = (requestId) => {

       //Ajax call to delete the message from the database (persistency) and on success
       let url= `/user/requests/delete/${requestId}`;
       $.ajax({
           url: url,
           type: 'POST',
           headers: {'token': this.context.token },
           success: this.removeRequestFromUI(requestId)
       })
       // .done (this.removeMessageFromUI(messageId))
           .catch( function(e){
               alert("Blood request not Deleted! ");
           });
   }

   completeRequest = (requestId) => {

    //Ajax call to delete the message from the database (persistency) and on success
    let url= `/user/requests/complete/${requestId}`;
    $.ajax({
        url: url,
        type: 'POST',
        headers: {'token': this.context.token },
        success: this.removeRequestFromUI(requestId)
        })
        .catch( function(e){
            alert("Blood request not set completed! ");
        });
}


   render() {

       const columns=[



           {
               Header:"#",
               width:50,
                Cell: (row) => {
                return <div className="text-center h6">{row.index+1}</div>;
            }
          
            },
           {
               Header:"Name",
               accessor:"pFirstName",
               width:110,
               manWidth:110,
               minWidth:110
           },
           {
               Header:"Surname",
               accessor:"pLastName",
               width:110,
               manWidth:110,
               minWidth:110
           },
           {
               Header:"Father",
               accessor:"pFatherName",
               width:100,
               manWidth:100,
               minWidth:100
           },
           {
               Header:"Need",
               accessor:"needType",
               width:100,
               manWidth:100,
               minWidth:100
           },
           {
               Header: <FontAwesomeIcon icon={faTint} style={{ color: 'gray' }} size="1x" />,
               //"Blood",
               accessor:"bloodType",
               width:50,
               manWidth:50,
               minWidth:50
           },
           {
            Header:"Email",
            Cell: row=>{
                return(
                    <div className="text-center">
                    <a href={`mailto:${row.original.contactEmail}`} target="_blank" rel="noopener noreferrer" >
                        <FontAwesomeIcon icon={faPaperPlane} style={{ color: 'pink' }} size="1x" />
                    </a>
                    </div>

                )
            },
            sortable:false,
            filterable:false, 
            minWidth:70,
            width:70
                
           },
           {
               Header:"Hospital",
               accessor:"hName",
               width:100,
               manWidth:100,
               minWidth:100
           },
           {
               Header:"Status",
               accessor:"status",
               width:100,
               manWidth:100,
               minWidth:100
           },
           {
               Header:"Action",
               Cell: row=>{
                   return(
                       <button  className="btn btn-danger btn-sm"
                                onClick={()=> {
                                    this.deleteRequest(row.original.requestId);

                                }}
                       >Delete</button>

                   )
               },
               sortable:false,
               filterable:false,
               width:75,
               
           },
           {
            Header:"Action",
            Cell: row=>{
                return(
                    <button className="btn btn-primary btn-sm"
                             onClick={()=> {
                                 this.completeRequest(row.original.requestId);

                             }}
                    >Completed</button>

                )
            },
            sortable:false,
            filterable:false,
            width:95,
            
        }
       ]

       return (
        


            <div>
                <ReactTable
                    columns={columns}
                    data={this.state.requests}
                    filterable
                    defaultPageSize={10}
                    pageSizeOptions={[10, 20, 50]}
                >


                </ReactTable>
            </div>


       );
   }
}
export default UserPanelBloodRequest;