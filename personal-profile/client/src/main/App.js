import React from "react";

import Header from "./views/Header";
import Body from "./views/Body";
import Footer from "./views/Footer";
import LandPage from "./views/LandPage";

function App(){
  render(
    <div>
        <LandPage />
        <Header />
        <Body />
        <Footer />
    </div>
  )
}

export default App;
