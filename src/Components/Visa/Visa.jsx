import React from 'react';
import './Visa.css'; // Import CSS file for styling

import { FaCcVisa } from "react-icons/fa6";

function Visa() {
    return (
        <div className='container'>


        <div className="square-container">
            <div className="circle-inside">
                <div className="icon-container">
                    <FaCcVisa className="icon" />
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

export default Visa;
