import React, { Component } from 'react';
import MainCards from './MainCards';
import './Main.css';
import MainMotivationalSection from './MainMotivationalSection'
import BloodRequestsTable from './BloodRequestsTable';




class Main extends Component{

// scroll page on top 
componentDidMount() {
    window.scrollTo(0, 0);
}

    render(){
        return (
         <div className="container" style={{paddingBottom:'10px', paddingTop:'80px'}}>
            <br/>
            <h1 className="main diplay-4 text-center"><em>These are the people in need right now. Can you help?</em></h1>
            
            <BloodRequestsTable />
        
            <br/>
            <hr/>
            <br/>
            
            <MainMotivationalSection />
            <br/>
            <MainCards />

            

        </div>           
        );
    }
}

export default Main;