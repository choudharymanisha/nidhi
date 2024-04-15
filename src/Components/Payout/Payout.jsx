import React from 'react';
import './Payout.css'; // Import CSS file for styling

import { FaRegMoneyBill1 } from "react-icons/fa6";


function Payout() {
    return (
        <div className='container'>


        <div className="square-container">
            <div className="circle-inside">
                <div className="icon-container">
                    <FaRegMoneyBill1 className="icon" />
                    <div className='icon-text'>
                        <p>17435</p>
                    </div>
                
                </div>
                <div className='text'>
                    <p>Payout <br/> Wallet Balance</p>
                </div>
               
                </div>
            </div>
        </div>
        
            
    );
}

export default Payout;
