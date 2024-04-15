import React from 'react';
import './MasterCard.css'; // Import CSS file for styling

import { FaCcMastercard } from "react-icons/fa";

function MasterCard() {
    return (
        <div className='container'>


        <div className="square-container">
            <div className="circle-inside">
                <div className="icon-container">
                    <FaCcMastercard className="icon" />
                    <div className='icon-text'>
                        <p>17435</p>
                    </div>
                
                </div>
                <div className='text'>
                    <p>Debit Card Wallet <br/> Balance</p>
                </div>
               
                </div>
            </div>
        </div>
        
            
    );
}

export default MasterCard;
