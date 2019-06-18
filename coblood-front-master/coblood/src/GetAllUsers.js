import React, {Component} from 'react';
import ReactTable from 'react-table'
import { UserContext } from './UserContext';
import $ from "jquery";


class GetAllUsers extends Component {
    static contextType = UserContext;

   constructor(props) {
       super(props)
       this.state = {
           users: []
       }
   }

   componentDidMount() {      

       fetch ('/admin/users', {
        method: 'GET',
        headers: {'token': this.context.token}
        })
        .then((response) =>  response.json() )
        .then(users => {
            this.setState({users: users})})
        .catch (function(error){
            console.log('Bad request or ' + error);
        })
   }


   //Removes  message from  UI by setting the state
   removeUserFromUI = (userId) =>{
       const newUsers = this.state.users.filter(user=> user.userId!==userId);
       this.setState({users: newUsers});
   }


   makeAdmin = (userId) => {
        $.ajax({
            url: `/admin/users/role/${userId}`,
            type: 'POST',
            headers: {'token': this.context.token },
        })
        .catch( function(e){
                alert("User not made into admin! "+ e);
            });
   }

   deleteUser = (userId) => {
       //Ajax call to delete user form the database
       let url= `/admin/users/delete/${userId}`;
       $.ajax({
           url: url,
           type: 'POST',
           headers: {'token': this.context.token },
           success: this.removeUserFromUI(userId)
       })
         .catch( function(e){
               alert("User not Deleted! "+ e);
           });
   }





   render() {

        const columns = [
            {
                Header: "#",
                accessor: "userId",
                width: 80,
                maxWidth: 100,
                minWidth: 100
            },
            {
                Header: "Username",
                accessor: "username",
                width: 120,
                maxWidth: 150,
                minWidth: 100
            },
             {
                Header: "First Name",
                accessor: "firstname",
                width: 160,
                maxWidth: 190,
                minWidth: 100
            },
             {
                Header: "Last Name",
                accessor: "lastname",
                width: 160,
                maxWidth: 100,
                minWidth: 100
            },
             {
                Header: "Email",
                accessor: "email",
                width: 180,  
            },
             {
                Header: "Phone Number",
                accessor: "phoneNumber",
                width: 180,
                // minWidth: 100
            },
            {
                Header: "Blood Type",
                accessor: "bloodType",
                width: 100,
                manWidth: 100,
                // minWidth: 100
            },
            {
                Header: "Role",
                accessor: "role.roleType",
                width: 110
            },
            {
                Header:"Make Admin",
                Cell: row=>{
                    return(
                        <div className='text-center'>
                            <button  className="btn btn-secondary btn-sm"
                                onClick={()=> {
                                this.makeAdmin(row.original.userId); }}>
                                Admin?
                            </button>
                        </div>
                    )
                },
                sortable:false,
                filterable:false,
                width:110,

            },
            {
                Header:"Action",
                Cell: row=>{
                    return(
                            <button  className="btn btn-danger btn-sm"
                                    onClick={()=> {
                                        this.deleteUser(row.original.userId); }}>
                                    Delete
                                </button>
                    )
                },
                sortable:false,
                filterable:false,
                width:95
            }
        ]


       return (
           <div className="tab-pane fade show active" id="v-pills-profile" align="center" width="1000px" role="tabpanel"
                aria-labelledby="v-pills-profile-tab">
               <ReactTable
                   columns={columns}
                   data={this.state.users}
                   filterable
                   defaultPageSize={5}
                   pageSizeOptions={[5, 10, 20, 50]}>
               </ReactTable>
           </div>
       )
   }
}

export default GetAllUsers;