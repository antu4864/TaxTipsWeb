import React from 'react';
import { Link} from "react-router-dom";



const Menu=() => {
  return (
   <>
  
 
     
          <div className='con'>
             <div >
               
              <Link to="/Ca" className='Link'><div>Capital Allowances</div></Link>
              <hr/>
              <Link to="/Cg" className='Link'><div>Capital Gains Tax (CGT)</div></Link>
              <hr/>
              <Link to="/Ct" className='Link'><div>Corporation Tax</div></Link>
              <hr/>
              <Link to="/Dtc" className='Link'><div>Donations to Charity</div></Link>
              <hr/>
              <Link to="/It" className='Link'><div>Income Tax</div></Link>
              <hr/>
              <Link to="/Lt" className='Link'><div>Land Tax</div></Link>
              <hr/>
              <Link to="/Ni" className='Link'><div>National Insurance</div></Link>
              <hr/>
              <Link to="/Pen" className='Link'><div>Pensions</div></Link>
              <hr/>
              <Link to="/Vat" className='Link'><div>Value Added Tax (VAT)</div></Link>
              <hr/>
              <Link to="/Vb" className='Link'><div>Vehicle Benefits</div></Link>
              <hr/>
             
            </div>        
          
           </div> 
   </>
  );
}

export default Menu;
