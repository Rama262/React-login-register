import Registerform from './registerform';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Login from './Login';

function App() {
  return (
    
    <div className="App">
     <div className="container d-flex align-items-center flex-column">
        <Router>
          <Switch>
            <Route path="/" exact={true} component={Registerform}/>
             <Route path = "/login" component = {Login}/>
           </Switch>
          </Router>
       </div>
   </div>
  
   );
}

export default App;
