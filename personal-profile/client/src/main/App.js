import React from "react";
import {Switch, Route} from "react-router-dom";


import Header from "./views/Header";
import Body from "./views/Body";
import Footer from "./views/Footer";
import LandPage from "./views/LandPage";
import Profile from "./view/Resume";

function App(){
  render(
    <div>
        <LandPage />
        <Header />
        <Body />
        <Resume />
        <Footer />
    </div>
  )
}

export default App;
