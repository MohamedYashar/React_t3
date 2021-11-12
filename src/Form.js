import {useState} from 'react'
import Button from '@mui/material/Button';
import { Movie } from './Movie';
import { Initial } from './Initial';
import TextField from '@mui/material/TextField';


function Form (){

    const [Mname,setMname]     = useState("") 
    const [poster,setPoster]   = useState ("")
    const [summary,setSummary] = useState("")
    const [Ratings,setRating]   = useState("")

    const  currentMovie  = [{ Mname:Mname,poster,summary,Ratings } ]

    const [movieList, setmovieList] = useState(Initial)

    const add = () => { setmovieList([...movieList, ...currentMovie])

                  Initial.push(...currentMovie)}


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


            <Button  variant="contained" type="submit" onClick= { add } >Add Movie</Button>


            </div> 


            <div className="movielist">
              
                {movieList.map ((x, index)=>(<Movie  index = {index} Mname = {x.Mname}    poster= {x.poster} 
                                            summary= {x.summary}  Ratings= {x.Ratings}
                                        />))}

            </div>
      </div>
            
                    

                

    )
}

    export default Form;