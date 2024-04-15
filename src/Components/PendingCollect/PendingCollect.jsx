import React from 'react';
import './PendingCollect.css'; // Import CSS file for styling
import { TbDownload } from "react-icons/tb";



function PendingCollect() {
    return (
        <div className='container'>


        <div className="square-container">
            <div className="circle-inside">
                <div className="icon-container">
                <TbDownload  className='icon' />
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

export default PendingCollect;
