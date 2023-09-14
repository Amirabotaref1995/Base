import React from "react";

import { Route } from "react-router-dom";

import { Navbar } from "./Components/navbar/navbar";

import { Home } from "./pages/home/Home";

function App() {
  return (
    <div>
      <p>dasdsadsadsad</p>
      <Navbar />
      {/* <Route path="/" exact component={Home} />  */}
      {/* <Route path="/contact" component={Contact} /> */}
    </div>
  );
}

export default App;
