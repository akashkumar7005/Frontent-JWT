
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import UserDash from './userDash'
import DeliveryDash from './delivery'
import SignInOutContainer from './Container/Forms';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
 
  return (
    <div className="App">
      <Router>
      <Route exact path='/'><SignInOutContainer/></Route>
      <Route path='/user'><UserDash/></Route>
      <Route path='/delivery'><DeliveryDash/></Route>
    {/* <Route path="/" ><Form/></Route>
    <Route path="/main" ><Main/></Route>
    <Route path="/UserList" ><UserList/></Route>
    <Route path="/DetailedImage/:imgId">< DetailedImage/></Route> */}
    </Router>
   
    </div>
  );
}

export default App;
