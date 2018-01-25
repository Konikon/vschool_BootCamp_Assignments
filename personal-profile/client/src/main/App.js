import React from "react";
import {Switch, Route} from "react-router-dom";

import LandPage from "./views/LandPage";
import Resume from "./views/resume/Resume";
import Projects from "./views/projects/Projects";

function App(){
  return(
    <div className="app_wrapper">

        <Switch>
            <Route exact path="/" component={LandPage} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
        </Switch>

    </div>
  )
}

export default App;
