import React from 'react';
import { Link} from "react-router-dom";
import Header from './Header';


const Menu=() => {
  return (
   <>
  
     <Header/>
     
          <div className='con'>
             <div >
               
              <Link to="/Ca" className='Link'>Capital Allowances</Link>
              <hr/>
              <Link to="/Cg" className='Link'>Capital Gains Tax (CGT)</Link>
              <hr/>
              <Link to="/Ct" className='Link'>Corporation Tax</Link>
              <hr/>
              <Link to="/Dtc" className='Link'>Donations to Charity</Link>
              <hr/>
              <Link to="/It" className='Link'>Income Tax</Link>
              <hr/>
              <Link to="/Lt" className='Link'>Land Tax</Link>
              <hr/>
              <Link to="/Ni" className='Link'>National Insurance</Link>
              <hr/>
              <Link to="/Pen" className='Link'>Pensions</Link>
              <hr/>
              <Link to="/Vat" className='Link'>Value Added Tax (VAT)</Link>
              <hr/>
              <Link to="/Vb" className='Link'>Vehicle Benefits</Link>
              <hr/>
             
            </div>        
          
          </div> 
   </>
  );
}

export default Menu;
