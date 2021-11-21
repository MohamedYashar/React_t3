import { Link,Route, Redirect, Switch, useParams, useHistory} from 'react-router-dom';
import './App.css';
import Form from './Form'
import { AddColor } from './AddColor';
import { MovieForm } from './MovieForm';
import { Initial } from './Initial';
import { useState } from 'react';


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { EditMovie } from './EditMovie';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';






function App() {

  const history = useHistory();

  const [mode, setmode] = useState("dark") ;  



  // 1.creating context
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });



  return (
    //2. pusblisher provider
    <ThemeProvider theme={theme}>
      <Paper elevation={3} >
    <div className="App">

      <AppBar position="static">
        <Toolbar>
          <Button onClick= { ()=>history.push ("/")} size="large" color="inherit"  aria-label="Home"sx={{ mr: 2 }}>
          Home
          </Button>
          <Button onClick= { ()=>history.push ("/films")} size="large" color="inherit"  aria-label="Home"sx={{ mr: 2 }}>
          Movie DataBase
          </Button>
          <Button onClick= { ()=>history.push ("/AddColor")} size="large" color="inherit"  aria-label="Home"sx={{ mr: 2 }}>
          Color Game
          </Button>
          <Button onClick= { ()=>history.push ("/addMovie")} size="large" color="inherit"  aria-label="Home"sx={{ mr: 2 }}>
          Add Movie Form
          </Button>
          <Button onClick= { ()=>setmode( mode === "light" ?"dark":"light")} size="large" color="inherit"  aria-label="Home"sx={{ mr: 2 }}>
           {( mode === "light" ?"dark":"light")} Theme
          </Button>
          
        </Toolbar>
      </AppBar>

{/* /Movies/Edit/ */}
     
      <Switch>
          
         <Route path="/Movies/Edit/:id">   <EditMovie/>  </Route> 
          <Route path="/movies/add">    <MovieForm/>  </Route>                       
          <Route path="/films/:id" >    <MovieDetails />           </Route>
          <Route path="/addMovie">      <MovieForm/>               </Route>
          <Route path='/Movies/Remove'> <Redirect to="/films" />   </Route>
          <Route path='/movies'>        <Redirect to="/films" />   </Route>         

          <Route path="/films" >      <Form/>       </Route> 
                 
          <Route path="/AddColor">    <AddColor/>   </Route>          
          <Route exact path= "/">     <Welcome/>    </Route>
          <Route exact path="**">     <NotFound/>   </Route> 
      </Switch>

    </div>
    </Paper   >
    </ThemeProvider> 
  );
}

function Welcome (){
  return (
    <h2>Welcome to Movie App!!</h2>
  )
}

export default App;



function NotFound(){

  const styles = {  width: "100%", Objectfit:"cover" , textAlign: "center"}

  return (

    <div style= {styles}>
      <h1> pleace Try with the above links</h1>
    <img   src="https://gifimage.net/wp-content/uploads/2017/09/404-gif-8.gif"  alt="Page not found" style= {styles}  />
    </div>
    


  )
}



function MovieDetails (){

  const {id}= useParams();  
  const Films = Initial[id];

  const history = useHistory();
  const back = ()=> { history.goBack()}

  return      <div className="movieContainer-1">  
              
              <iframe width="100%" height="531" src={Films.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              
             <h3 className="firstrow_Moviecontainer">
              {Films.Mname}                             
              <span>⭐ {Films.Ratings}</span>            
              </h3>        
              <p >{Films.summary} </p>
              
              <button onClick= {back}> ⬅ Back</button>
          </div>


}



