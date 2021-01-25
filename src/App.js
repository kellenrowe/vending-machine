import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Ouzo from "./Ouzo";
import Sake from "./Sake";
import Bourbon from "./Bourbon";
import VendingMachine from "./VendingMachine";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
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
