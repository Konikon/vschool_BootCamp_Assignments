import React from "react";
import Navbar from "./Navbar";
import {Switch, Route} from "react-router-dom";
import About from "./views/About";
import Contact from "./views/Contact";
import Services from "./views/Services";
import Body from "./views/Body";

function App (){
    return(
        <div className="app-wraper">
            <Navbar />
            <Switch>
                <Route exact path="/"component={Body} />
                <Route path="/about"component={About} />
                <Route path="/contact"component={Contact} />
                <Route path="/services"component={Services} />
            </Switch>

        </div>
    )
}

export default App;
