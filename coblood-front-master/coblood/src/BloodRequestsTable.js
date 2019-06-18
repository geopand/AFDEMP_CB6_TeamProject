import React, { Component } from 'react'
import ReactTable from 'react-table'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPaperPlane,faEnvelope, faMobileAlt,faPhone,faTint } from '@fortawesome/free-solid-svg-icons';




class BloodRequestsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            requests: []
        }
    }


    componentDidMount() {
        fetch ('/requests/red')
        .then((response)=> response.json() 
        )
        .then( json => this.setState({requests: json})
        )
        .catch (function(error){
            console.log('Bad request or ' + error);
        })
    }


  render() {
    const columns=[
        {
            Header:"Owner",
            accessor:"note",
            width:110,
            maxWidth:110,
            minWidth:110
        },
        {
            Header:"Name",
            accessor:"pFirstName",
            width:110,
            maxWidth:110,
            minWidth:110
        },
        {
            Header:"Surname",
            accessor:"pLastName",
            width:110,
            maxWidth:110,
            minWidth:110
        },
        {
            Header:"Father's Name",
            accessor:"pFatherName",
            width:130,
            maxWidth:110,
            minWidth:110
        },
        {
            Header:"Type of Need",
            accessor:"needType",
            width:130,
            maxWidth:100,
            minWidth:100
        },
        {
            Header: <FontAwesomeIcon icon={faTint} style={{ color: 'gray' }} size="1x" />,
            accessor:"bloodType",
            width:50,
            maxWidth:100,
            minWidth:100
        },
        {
            Header:"Hospital",
            accessor:"hName",
            width:120,
            maxWidth:100,
            minWidth:100
        },
        {
            Header:"H. Zip Code",
            accessor:"hZipCode",
            width:100,
            maxWidth:100,
            minWidth:100
        },
        {
            Header:<FontAwesomeIcon icon={faEnvelope} style={{ color: 'gray' }} size="lg" />,
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
            Header:<FontAwesomeIcon icon={faPhone} style={{ color: 'gray' }} size="1x" />,
            Cell: row=>{
                return(
                    <div className="text-center">
                        <a href={`tel:+30${row.original.contactPhone}`} target="_blank" rel="noopener noreferrer" >
                            <FontAwesomeIcon icon={faMobileAlt} style={{ color: 'pink' }} size="lg" />
                        </a>
                    </div>
                )
            },
            sortable:false,
            filterable:false,
            width:70,        
            maxWidth:100,
            minWidth:70
        },
        {
            Header:"Status",
            accessor:"status",
            width:70,
            maxWidth:110,
            minWidth:110,
            sortable:false,
            filterable:false,
        }
    ]

    return (
        <div className="row " align="center">
            <div className="col-12 mt-5">
                    <ReactTable
                        columns={columns}
                        data={this.state.requests}
                        filterable
                        defaultPageSize={10}
                        pageSizeOptions={[10, 20, 50]}>
                    </ReactTable>
            </div>
        </div>
    )
  }
}

export default  BloodRequestsTable;
