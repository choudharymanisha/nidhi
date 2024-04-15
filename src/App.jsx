import { useState } from 'react'
import"./App.css"
import Customers from './Components/Customers/Customers'
import Payout from './Components/Payout/Payout'
import MasterCard from './Components/MasterCard/MasterCard'
import Visa from './Components/Visa/Visa'
import Pending from './Components/Pending/Pending'
import PenTransactions from './Components/PenTransactions/PenTransactions'
import Applications from './Components/Applications/Applications'
import OnlinePayOut from './Components/OnlinePayOUT/OnlinePayOut'
import PendingCollect from './Components/PendingCollect/PendingCollect'
function App(){
  return(
    <div className = "wrapper">
      <div className='contain'>
    
    <Customers/>
   <Payout/>
   <MasterCard/>
   <Visa/>
   <Pending/>
   <PenTransactions/>
   <Applications/>
   <OnlinePayOut/>
   <PendingCollect/>
     </div>
      </div>


      
  
      
    
  )
}
export default App
