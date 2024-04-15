import React from 'react';
import './Pending.css'; // Import CSS file for styling

import { MdGroups } from "react-icons/md";

function Pending() {
    return (
        <div className='container'>


        <div className="square-container">
            <div className="circle-inside">
                <div className="icon-container">
                <MdGroups className='icon' />
                    <div className='icon-text'>
                        <p>450</p>
                    </div>
                
                </div>
                <div className='text'>
                    <p>Pending Customers</p>
                </div>
               
                </div>
            </div>
        </div>
        
            
    );
}

export default Pending;
