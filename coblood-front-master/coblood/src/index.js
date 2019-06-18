import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const userData = {
    token: localStorage.getItem('token'),
    userId : localStorage.getItem('userId'),
    username: localStorage.getItem('username'),
    roleInt: localStorage.getItem('roleInt'),
    roleType : localStorage.getItem('roleType')

}

ReactDOM.render(<App userData={userData}/>, document.getElementById('root'));


