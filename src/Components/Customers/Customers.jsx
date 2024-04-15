import React from 'react';
import './Customer.css'; // Import CSS file for styling
import { IoPeopleSharp } from "react-icons/io5";




function Customers() {
    return (
        <div className='container'>


        <div className="square-container">
            <div className="circle-inside">
                <div className="icon-container">
                <IoPeopleSharp className='icon' />
                    <div className='icon-text'>
                        <p>450</p>
                    </div>
                
                </div>
                <div className='text'>
                    <p>No of Customer <br/> Members</p>
                </div>
               
                </div>
            </div>
        </div>
        
            
    );
}

export default Customers;
