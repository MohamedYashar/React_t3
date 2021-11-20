import { useParams, useHistory } from 'react-router-dom';
import { Initial } from './Initial';
import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

export function EditMovie() {

  const { id } = useParams();
  const [movieList, setmovieList] = useState(Initial);

  const SelectedMovies = Initial[id];

  console.log(Initial, SelectedMovies);

  const [Mname, setMname] = useState(SelectedMovies.Mname);
  const [poster, setPoster] = useState(SelectedMovies.poster);
  const [summary, setSummary] = useState(SelectedMovies.summary);
  const [Ratings, setRating] = useState(SelectedMovies.Ratings);
  const [trailer, setTrailer] = useState(SelectedMovies.trailer);


  const resetForm = () => {

    setMname("");
    setPoster("");
    setSummary("");
    setRating("");
    setTrailer("");
  };



  const history = useHistory();


  const Edit = () => {

    const updatedMovie = [{ Mname: Mname, poster, summary, Ratings, trailer }];
    const movieList = [...Initial];
    movieList[id] = updatedMovie;
    setmovieList(movieList);
    history.push("/films");
    resetForm();
  };

  return (
    <div>

      <div className="container">

        <TextField value={Mname} id="outlined-basic" label="Enter Movie name" variant="outlined"
          onChange={(x) => setMname(x.target.value)} />

        <TextField value={poster} id="outlined-basic" label="Paste your image link" variant="outlined"
          onChange={(y) => setPoster(y.target.value)} />

        <TextField value={summary} id="outlined-basic" label="Movie summary " variant="outlined"
          onChange={(z) => setSummary(z.target.value)} />

        <TextField value={Ratings} id="outlined-basic" label="Ratings" variant="outlined"
          onChange={(e) => setRating(e.target.value)} />

        <TextField value={trailer} id="outlined-basic" label="Movie Trailer" variant="outlined"
          onChange={(e) => setTrailer(e.target.value)} />


        <Button variant="contained" color="success" type="submit" onClick={Edit}>Save</Button>


      </div>

    </div>
  );
}
