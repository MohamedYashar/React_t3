import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import Form from './Form'
import { About } from './About';
import { Dashboard } from './Dashboard';
import { AddColor } from './AddColor';

function App() {
  return (
    <div className="App">

      <ul>        
          <li> <Link to="/form" >      Movie Form </Link> </li>
          <li> <Link to="/about" >     About      </Link> </li>
          <li> <Link to="/dashboard" > Dashboard  </Link> </li>
          <li> <Link to="/AddColor" >  Color Game </Link> </li>
      </ul>

      <hr/>

      <switch>
          <Route path="/form"  >      <Form/>       </Route> 
          <Route path="/about">       <About/>      </Route>
          <Route path="/dashboard">   <Dashboard/>  </Route>
          <Route path="/AddColor">    <AddColor/>   </Route>
      </switch>

    </div>
  );
}


export default App;
