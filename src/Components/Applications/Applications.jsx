import React from 'react';
import './Applications.css'; // Import CSS file for styling
import { MdPendingActions } from "react-icons/md";



function Applications() {
    return (
        <div className='container'>


        <div className="square-container">
            <div className="circle-inside">
                <div className="icon-container">
                <MdPendingActions   className='icon' />
                    <div className='icon-text'>
                        <p>0</p>
                    </div>
                
                </div>
                <div className='text'>
                    <p>Pending  Applications
                        
                    </p>
                </div>
               
                </div>
            </div>
        </div>
        
            
    );
}

export default Applications;
