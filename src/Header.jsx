import React from 'react';
{/*import { ArrowBack } from '@material-ui/icons';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { useHistory} from "react-router-dom";


const Header=()=>{
    const history = useHistory();
  
    const back = () =>{ 
      history.push("/TaxAssistantWeb");
    }
    return(


<div>

<AppBar position="static" >
<Toolbar>
  <IconButton style={{marginRight: 40,}}color="inherit">
    <ArrowBack onClick={back}/>
  </IconButton>
  <Typography
    variant="h5"
    style={{
      flexGrow: 5,
 
    }}
  >
    Key Tax Dates
    </Typography>

</Toolbar>
</AppBar>
  </div>*/}
  const Header=()=>{
    return(
     <center><h2 className="ab">Tax Tips</h2></center> 
    );}
export default Header;