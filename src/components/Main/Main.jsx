import React from 'react';
import Left from './Left';
import Right from './Right';
import './Main.css'; // Import the CSS file

function Main() {
    return (
        <div className="main-container"> 
            <Left />
            <Right />
        </div>
    );
}

export default Main;