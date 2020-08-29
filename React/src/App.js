import React from "react";
import Login from "./view/pages/Admin/components/Login/Login"
import ForgetPassword from "./view/pages/Admin/components/ForgetPassword/ForgetPassword";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link

} from "react-router-dom";
import ModificationByFieldMain from "./components/ModificationByField/ModificationByField";



 function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>

          <li>
              <Link to="/register">Register</Link>

            </li>

            <li>
              <Link to="/Admin">Admin</Link>
            </li>
            <li>
              <Link to="/analysis">Analysis</Link>
            </li>
            <li>
              <Link to="/status">Status</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact={true} path="/">
            <h1>login</h1>
          </Route>
          <Route path="/register">
            
          </Route>
          <Route path="/forgotPassword">
              <ForgetPassword></ForgetPassword>
          </Route>
          <Route path="/Admin">
          <h1>Admin</h1>
            
          </Route>
          <Route path="/analysis">
          <ModificationByFieldMain/>
          </Route>
          <Route path="/status">

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
