import React from 'react';
import './PenTransactions.css'; // Import CSS file for styling
import { FaCartShopping } from "react-icons/fa6";



function PenTransactions() {
    return (
        <div className='container'>


        <div className="square-container">
            <div className="circle-inside">
                <div className="icon-container">
                <FaCartShopping  className='icon' />
                    <div className='icon-text'>
                        <p>450</p>
                    </div>
                
                </div>
                <div className='text'>
                    <p>Pending  Transactions
                        <br/> of yours
                    </p>
                </div>
               
                </div>
            </div>
        </div>
        
            
    );
}

export default PenTransactions;
