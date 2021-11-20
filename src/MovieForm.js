

import { useHistory } from 'react-router-dom'

import { useState } from 'react';

import Button from '@mui/material/Button';
import { Movie } from './Movie';
import TextField from '@mui/material/TextField';



export function MovieForm() {

  const [Mname,   setMname]   = useState("");
  const [poster,  setPoster]  = useState("");
  const [summary, setSummary] = useState("");
  const [Ratings, setRating]  = useState("");
  const [trailer,setTrailer]   = useState("")


  

  const currentMovie = [{ Mname: Mname, poster, summary, Ratings }];

  const resetForm = () => {

    setMname("");
    setPoster("");
    setSummary("");
    setRating("");
    setTrailer("");
  }

  const [movieList, setmovieList] = useState([]);

  const history = useHistory();

  return (
    <div>

      <div className="container">

        <TextField  value = {Mname} id="outlined-basic" label="Enter Movie name" variant="outlined"
          onChange={(x) => setMname(x.target.value)} />

        <TextField value = {poster} id="outlined-basic" label="Paste your image link" variant="outlined"
          onChange={(y) => setPoster(y.target.value)} />

        <TextField value = {summary} id="outlined-basic" label="Movie summary " variant="outlined"
          onChange={(z) => setSummary(z.target.value)} />

        <TextField value = {Ratings} id="outlined-basic" label="Ratings" variant="outlined"
          onChange={(e) => setRating(e.target.value)} />

        <TextField value = {trailer} id="outlined-basic" label="Movie Trailer" variant="outlined"
          onChange={(e) => setTrailer(e.target.value)} />


        <Button  variant="contained" type="submit" onClick={() =>{
          setmovieList([...movieList, ...currentMovie]);
          resetForm();
          } 
        }>Add Movie</Button>


      </div>
      <div className="movielist">

        {movieList.map((x) => (<Movie Mname={x.Mname} poster={x.poster}
          summary={x.summary} Ratings={x.Ratings}  />))}

      </div>
    </div>
  );
}
