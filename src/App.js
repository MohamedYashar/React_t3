import { Link,Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import Form from './Form'
import { About } from './About';
import { Dashboard } from './Dashboard';
import { AddColor } from './AddColor';
import { MovieForm } from './MovieForm';
import { textAlign } from '@mui/system';

function App() {
  return (
    <div className="App">

      <ul> 
          <li> <Link to="/"> Home</Link></li>
          <li> <Link to="/films" >     Movie DataBase </Link> </li>
          <li> <Link to="/about" >     About      </Link> </li>
          <li> <Link to="/dashboard" > Dashboard  </Link> </li>
          <li> <Link to="/AddColor" >  Color Game </Link> </li>
          <li> <Link to="/addMovie">  Add Movie Form</Link></li>
          

          
          
          </ul>

      <hr/>

      <Switch>
        <Route path="/movies/add">   <Redirect to="/addMovie"/>    </Route>
          <Route path="/addMovie">   <MovieForm/>                  </Route>
          <Route path='/movies'>     <Redirect to="/films"/>       </Route>

          <Route path="/films/:id"  >     Movie Details      </Route>  
          <Route path="/films"  >      <Form/>      </Route> 
          <Route path="/about">       <About/>      </Route>
          <Route path="/dashboard">   <Dashboard/>  </Route>
          <Route path="/AddColor">    <AddColor/>   </Route>          
          <Route exact path= "/">     <Welcome/>     </Route>
          <Route exact path="**">
          <NotFound/>         
          </Route>
          {/* <Route path="/edit">
            <Edit/>
          </Route>
           */}
      </Switch>

    </div>
  );
}

function Welcome (){
  return (
    <h1>Welcome to Home page</h1>
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


// export function Edit ({Mname,Ratings,summary}){

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