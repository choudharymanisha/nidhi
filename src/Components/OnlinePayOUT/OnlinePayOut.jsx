import React from 'react';
import './OnlinePayOut.css'; // Import CSS file for styling
import { BsUpload } from "react-icons/bs";



function OnlinePayOut() {
    return (
        <div className='container'>


        <div className="square-container">
            <div className="circle-inside">
                <div className="icon-container">
                <BsUpload  className='icon' />
                    <div className='icon-text'>
                        <p>450</p>
                    </div>
                
                </div>
                <div className='text'>
                    <p>Pending Online
                        <br/> Payout
                    </p>
                </div>
               
                </div>
            </div>
        </div>
        
            
    );
}

export default OnlinePayOut;
