import React from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import GlobalStyles from "./components/GlobalStyles";
import EmployeeDetail from "./components/EmployeeDetail/EmployeeDetail";


function App() {
  return (
      <>
          <GlobalStyles/>
        <Router>
              <Switch>
                  <Route path="/employees/:id" exact component={EmployeeDetail}/>
                  <Route path="/" exact component={EmployeeList}/>
            </Switch>
        </Router>
      </>
  );
}

export default App;
