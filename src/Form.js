import {useState} from 'react'
import Button from '@mui/material/Button';
import { Movie } from './Movie';
import { Initial } from './Initial';
import TextField from '@mui/material/TextField';


function Form (){

    const [Mname,setMname]     = useState("") 
    const [poster,setPoster]   = useState ("")
    const [summary,setSummary] = useState("")
    const [rating,setRating]   = useState("")

    const  currentMovie  = [{ Mname:Mname,poster,summary,rating }]

    const [movieList, setmovieList] = useState(Initial)

    return (

      <div>

            <div className="container">

            <TextField id="outlined-basic" label="Enter Movie name" variant="outlined" 
                  onChange  ={(x)=> setMname(x.target.value)}  /> 

            <TextField id="outlined-basic" label="Paste your image link" variant="outlined" 
                  onChange  ={(y)=> setPoster(y.target.value)}  />

            <TextField id="outlined-basic" label="Movie summary " variant="outlined" 
                  onChange  ={(z)=>  setSummary(z.target.value)}  />

            <TextField id="outlined-basic" label="Ratings" variant="outlined" 
                  onChange  ={(e)=>  setRating(e.target.value)}  />


            <Button  variant="contained" type="submit" onClick= { () => setmovieList([...movieList, ...currentMovie])} >Add Movie</Button>


            </div> 


            <div className="movielist">
              
                {movieList.map ((x)=>(<Movie  Mname = {x.Mname}    poster= {x.poster} 
                                            summary= {x.summary}  Ratings= {x.rating}
                                        />))}

            </div>
      </div>
            
                    

                

    )
}

    export default Form;