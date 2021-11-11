import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';

import { Counter } from './Counter';

import { useHistory} from 'react-router-dom'




  export function Movie({ Mname, poster, summary, Ratings } ) {

  const [show, setshow] = useState(true);
  const styles = { display: show ? "block" : "none" };
  const history = useHistory();

  return (   
    
      <Card className="movieContainer">    
        <CardMedia         
          component="img"
          alt="green iguana"
          height="140"
          src={poster} alt="Movie Image" />

          <CardContent>
            
            
            <h3 className="firstrow_Moviecontainer">
              {Mname} 
              <IconButton onClick={() => setshow(!show)}  aria-label="Expand More&less Icon" color="primary">
                  {show ? <ExpandLessIcon  /> : <ExpandMoreIcon  />}
              </IconButton>               
              <span>⭐ {Ratings}</span>            
              </h3>
              
             

              <div className="firstrow_Moviecontainer-1">
                  <IconButton  onClick={()=> history.push('/AddColor')} aria-label="Info Icon" color="primary">
                    <InfoIcon/>
                  </IconButton> 
                  <IconButton  aria-label="Edit Icon" color="success">
                    <EditIcon/>
                  </IconButton>
                  <IconButton aria-label="Delete Icon" color="error">
                    <DeleteIcon/>
                  </IconButton> 
              </div>            
              
              <p style={styles}>{summary} </p>
              
              <CardActions>
                  <Counter />
              </CardActions>

          </CardContent>

      
      </Card>
    
    
  );
}


// function Edit ({Mname,Ratings,summary}){

//   return (

//     <Card className="movieContainer">    
//         <CardContent>      
          
//             <h3 className="firstrow_Moviecontainer">
//             {Mname}            
//             <span>⭐ {Ratings}</span>            
//             </h3>   
//             <p >{summary} </p>          
            
//         </CardContent>

      
//       </Card>
    

//   )
// }

