import { useParams, useHistory } from 'react-router-dom';
import { Initial } from './Initial';
import * as React from 'react';
import Button from '@mui/material/Button';
import {useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';

// import {useFormik} from "formik"
// import * as yup from 'yup';

export function EditMovie() {

  const {id} = useParams();

  const [movie, setMovie] =useState({});

  

// BAD EXAMPLE
  // function MovieData(){
  //   console.log(id);

  //   const url = `https://61988db4164fa60017c230f5.mockapi.io/movies/${id}` ;
  //   console.log(url)
  //   fetch(url)
  //   .then((response) => response.json())
  //   .then ((data) => setMovie(data))
  //   .then(console.log(movie))
  // }

  

  // data fetching and partiular data (Racing issue)

  async function getmovdat (){
    const url = `https://61988db4164fa60017c230f5.mockapi.io/movies/${id}` ;
    //console.log(url)

    let response = await fetch(url);
    let data = await response.json() 
    setMovie(data)
    //console.log (movie)
  }

  useEffect(getmovdat, []) 

    const [Mname,setMname]     = useState("") 
    const [poster,setPoster]   = useState ("")
    const [summary,setSummary] = useState("")
    const [Ratings,setRating]  = useState("")
    const [trailer,setTrailer] = useState("")

  return <div>
    {movie ?   <UpdateMovie movie ={movie} /> : null} 
  </div>

}

// const formValidationSchema = yup. object({
//   Mname: yup.string().required(),
//   poster: yup.string().min(4).required(),
//   summary: yup.string().matches(0 - 10).required(),
//   Ratings: yup.string().min(20).required(),
//   trailer: yup.string().min(4).required(),
  
// })

function UpdateMovie ({movie}){

    const [Mname,setMname]     = useState   ("movie.Mname")
    const [poster,setPoster]   = useState   (movie.poster)
    const [summary,setSummary] = useState   (movie.summary)
    const [Ratings,setRating]   = useState  (movie.Ratings)
    const [trailer,setTrailer]   = useState (movie.trailer)
    const [id,setid]   = useState(movie.id)
console.log(movie)
console.log(movie)

    // const {handleSubmit} = useFormik({
    //   validationSchema : formValidationSchema,
      
    // })

    // const [movie, setMovie] =useState([]);

    const history = useHistory();


    const Edit =() => {
      const updatedMovie ={Mname:Mname,poster,summary,Ratings,trailer}
      console.log(updatedMovie)

      fetch (`https://61988db4164fa60017c230f5.mockapi.io/movies/${movie.id}` , {
        method:"PUT", 
        body: JSON.stringify(updatedMovie),
        headers : {"Content-type": "application/json"}
      })
    .then(history.push("/films"));

    
    }

    console.log(movie.id) 

  //    fetch("https://6199446f9022ea0017a7adfb.mockapi.io/movies/"+id,{
  //    method:"PUT",
  // body:JSON.stringify(updatedMovie),
  //   headers:{"Content-type":"application/json"}})
  //    .then(history.push("/Movies"));

  // };


  return (
    <div>

      <form   className="container">

        <TextField value={Mname} id="outlined-basic" label="Enter Movie name" variant="outlined"
          onChange={(x) => setMname(x.target.value)} />

{console.log (Mname)}
        <TextField value={poster} id="outlined-basic" label="Paste your image link" variant="outlined"
          onChange={(y) => setPoster(y.target.value)} />

        <TextField value={summary} id="outlined-basic" label="Movie summary " variant="outlined"
          onChange={(z) => setSummary(z.target.value)} />

        <TextField value={Ratings} id="outlined-basic" label="Ratings" variant="outlined"
          onChange={(e) => setRating(e.target.value)} />

        <TextField value={trailer} id="outlined-basic" label="Movie Trailer" variant="outlined"
          onChange={(e) => setTrailer(e.target.value)} />


        <Button variant="contained" color="success" type="submit"   onClick = { Edit } >Save</Button>


      </form>

    </div>
  );

}


//Task FOR NEXT WEEK
    // Validation - on Add movie & Edit movies
    // name - required// poster - min 4, required
    // rating - 0 - 10, required
    // summary - min 20 chars, required
    // trailer -min 4, required