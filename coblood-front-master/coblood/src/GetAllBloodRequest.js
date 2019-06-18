import React, { Component } from 'react'
import ReactTable from 'react-table'
import { UserContext } from './UserContext';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTint } from '@fortawesome/free-solid-svg-icons';

import $ from "jquery";



class GetAllBloodRequest extends Component {

    static contextType = UserContext;
    
    constructor(props) {
       super(props);
       this.state = {
           requests: []
       }
   }


  
   componentDidMount() {
       const url ='/admin/requests';
       fetch (url, {
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
   
   removeRequestFromUI = (requestId) => {
       const newRequests = this.state.requests.filter(request => request.requestId!==requestId);
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
        .catch( function(e){
            alert("Blood request not Deleted! "+ e);
        });
   }


   render() {

       const columns=[
           {
               Header:"#",accessor:"requestId",
               width:75,
               manWidth:100,
               minWidth:100 },
           {
               Header:"Owner",
               accessor:"note",
               width:100,
               manWidth:100,
               minWidth:100
           },
           {
               Header:"Name",
               accessor:"pFirstName",
               width:120,
               minWidth:100
           },
           {
               Header:"Surname",
               accessor:"pLastName",
               width:120,
               minWidth:100
           },
           {
               Header:"Father's Name",
               accessor:"pFatherName",
               width:120,
               minWidth:100
           },
           {
               Header:"Need",
               accessor:"needType",
               width:100,
               maxWidth:160,
               minWidth:100
           },
           {
               Header: <FontAwesomeIcon icon={faTint} style={{ color: 'gray' }} size="1x" />,
               accessor:"bloodType",
               width:40,
               minWidth:100
           },
           {
               Header:"Email",
               accessor:"contactEmail",
               width:130,
               minWidth:100
           },
           {
               Header:"Phone",
               accessor:"contactPhone",
               width:130,
               minWidth:100
           },
           {
               Header:"Hospital",
               accessor:"hName",
               width:100,
               minWidth:100
           },
           {
               Header:"Zip Code",
               accessor:"hZipCode",
               width:100,
               minWidth:100
           },
           {
               Header:"Status",
               accessor:"status",
               width:100,
               minWidth:100
           },
           {
               Header:"Action",
               Cell: row=> {
                   return(
                        <div className='text-center'>
                       <button  className="btn btn-danger btn-sm"
                                onClick={()=> {
                                    this.deleteRequest(row.original.requestId);

                                }}
                       >Delete</button>
                       </div>
                   )
               },
               sortable:false,
               filterable:false,
               width:70,
              
           }
       ]

       return (
           <div className="tab-pane fade" id="v-pills-messages" align="center" width="1000px" role="tabpanel"
                aria-labelledby="v-pills-messages-tab">

                   <ReactTable
                       columns={columns}
                       data={this.state.requests}
                       filterable
                       defaultPageSize={5}
                       pageSizeOptions={[5,10, 20, 50]}
                   >


                   </ReactTable>
               </div>


       )
   }
}
export default GetAllBloodRequest;