import React, { Component } from "react";
import './Style/Home.css';
import "./Style/Gallary.css";
import Gallary from "./Gallary"
import MainView from './MainView'
class Home extends Component {
render() {
 return (
      <div className="homeView">
       <MainView></MainView>
       <Gallary></Gallary>
    </div>
    );
  }
}




export default Home;
