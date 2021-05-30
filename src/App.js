import React from 'react';
import {Route, Switch} from "react-router-dom";
import Ca from "./Ca";
import Cg from "./Cg";
import Ct from "./Ct";
import Dtc from "./Dtc";
import It from "./It";
import Lt from "./Lt";
import Ni from "./Ni";
import Pen from "./Pen";
import Vat from "./Vat";
import Vb from "./Vb";
import Menu from "./Menu";

  

const App = () => {
   
  return (
    <> 
     
      <Switch>
        <Route exact path='/TaxTipsWeb' component={Menu} />
        <Route path='/Ca' component={Ca} />
        <Route path='/Cg' component={Cg} />
        <Route path='/Ct' component={Ct} />
        <Route path='/Dtc' component={Dtc} />
        <Route path='/It' component={It} />
        <Route path='/Lt' component={Lt} />
        <Route path='/Ni' component={Ni} />
        <Route path='/Pen' component={Pen} />
        <Route path='/Vat' component={Vat} />
        <Route path='/Vb' component={Vb} />
        
      </Switch>
 
   </>
  );
}

export default App;
