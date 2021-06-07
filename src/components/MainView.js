import React, { Component } from "react";
import "./Style/MainView.css";
import cake from "./assets/images/cake.png";
class MainView extends Component {
  render() {
    return (
      <section id="header" className="mainView">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <div className="row">
                <div className="col-lg-6 col-12 leftSection">
                  <h1 className="sweezonHeading">SweeZon</h1>
                  <p className="bakersDesc">The Baker's Zone</p>
                  <p className="bakersDesc">Eggless Bakery And Snacks</p>
                </div>
                <div className="col-lg-6 col-12 rightSection">
                  <img src={cake} className="img-fluid"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainView;
