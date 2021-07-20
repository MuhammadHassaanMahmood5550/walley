import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from './Home';
import HomeContent from "./HomeContent";
import Aboutt from "./Aboutt";
import Service from "./Service";
import Contact from "./Contact";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
    <div className="App"> 
      <Home></Home> 
       {/* <Navbar></Navbar> */}
       <Switch>
         <Route exact path="/">
          <HomeContent></HomeContent>
         </Route>

         <Route exact path="/aboutt">
          <Aboutt></Aboutt>
         </Route>

          <Route exact path="/services">
          <Service></Service>
         </Route>

          <Route exact path="/contact">
          <Contact></Contact>
         </Route>

       </Switch>
    </div>
    </Router>
  );
}

export default App;
