import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";



function App() {

  return (
    <div className="App">
    <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/products" component={Products}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
