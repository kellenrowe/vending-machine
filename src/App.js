import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Ouzo from "./Ouzo";
import Sake from "./Sake";
import Bourbon from "./Bourbon";
import VendingMachine from "./VendingMachine";

// QUESTION: how to show diagram of links or should we?

/** App -> { NavBar, VendingMachine, Ouzo, Bourbon, Sake } */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/ouzo">
          <Ouzo />
        </Route>
        <Route exact path="/bourbon">
          <Bourbon />
        </Route>
        <Route exact path="/Sake">
          <Sake />
        </Route>
        <Route exact path="/">
          <VendingMachine />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
