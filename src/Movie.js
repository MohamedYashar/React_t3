import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

import { Initial } from './Initial'


export function Movie({ Mname, poster, summary, Ratings }) {

  const [show, setshow] = useState(true);
  const styles = { display: show ? "block" : "none" };

  return (

    
    
      <Card className="movieContainer">
    
        <CardMedia 
        
        component="img"
        alt="green iguana"
        height="140"
        src={poster} alt="Movie Image" />

        <CardContent>
        <h3>{Mname}
        
          <IconButton onClick={() => setshow(!show)}  aria-label="Expand More&less Icon" color="primary">
            {show ? <ExpandLessIcon  /> : <ExpandMoreIcon  />}
          </IconButton> 

          <IconButton onClick={()=> <Update/>} aria-label="Edit Icon" color="success">
            <EditIcon/>
          </IconButton> 

          
         <span>⭐ {Ratings}</span>

         
        </h3> 

              
        {/* <button onClick={() => setshow(!show)}>  {show ? "Hide" : "show"}Description</button> */}
        <p style={styles}>  {summary} </p>
        
        <CardActions>
            <Counter />
        </CardActions>
        </CardContent>

      
      </Card>
    
    
  );
}
function Counter() {

  const [like, setlike] = useState(0);
  const [Dislike, setDislike] = useState(0);

  return (
    <div>   
    
      <IconButton onClick={() => setlike(like + 1)} aria-label="Like" color="primary" >  
          <Badge badgeContent={like} color="primary">
          👍
          </Badge>     
      </IconButton>        
        
      <IconButton onClick={() => setDislike(Dislike + 1)} aria-label="dislike" color="primary"> 
          <Badge badgeContent={Dislike} color="error">
          👎 
          </Badge>    
      </IconButton> 

      
    </div>
  );

}

function Update (){

  const [Mname,setMname]     = useState("") 
  const [poster,setPoster]   = useState ("")
  const [summary,setSummary] = useState("")
  const [rating,setRating]   = useState("")

  const  currentMovie  = [{ Mname:Mname,poster,summary,rating }]

  const [movieList, setmovieList] = useState(Initial)

  return (


             <div className="container">

                    <TextField id="outlined-basic" label="Enter Movie name" variant="outlined" 
                          onChange  ={(x)=> setMname(x.target.value)}  /> 

                    <TextField id="outlined-basic" label="Paste your image link" variant="outlined" 
                           onChange  ={(y)=> setPoster(y.target.value)}  />

                    <TextField id="outlined-basic" label="Movie summary " variant="outlined" 
                           onChange  ={(z)=>  setSummary(z.target.value)}  />
                           
                    <TextField id="outlined-basic" label="Ratings" variant="outlined" 
                           onChange  ={(e)=>  setRating(e.target.value)}  />
                   

                   <Button variant="contained" type="submit" onClick= { () => setmovieList([...movieList, ...currentMovie])} >Change Details</Button>
                    
                    <div className="movielist">
                      
                        {movieList.map ((x)=>(<Movie  Mname = {x.Mname}    poster= {x.poster} 
                                                    summary= {x.summary}  Ratings= {x.rating}
                                                />))}

                    </div>
                    

             </div>  
  )
}
