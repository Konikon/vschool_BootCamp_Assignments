import React from "react";
import {Switch, Route} from "react-router-dom";


import Header from "./views/Navbar/Header";
import Footer from "./views/Footer";
import LandPage from "./views/LandPage";
import Resume from "./views/Resume";
import Projects from "./views/Projects";

function App(){
  return(
    <div className="app_wrapper">

        <Switch>
            <Route exact path="/" component={LandPage} />
        </Switch>

        <Header/>
        <Switch>
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
        </Switch>
        <Footer />
    </div>
  )
}

export default App;
