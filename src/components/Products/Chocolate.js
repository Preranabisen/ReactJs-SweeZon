import React, { Component } from "react";
import "../Style/Products.css";
import choco from "../assets/images/choco.png";

class Chocolate extends Component {
  state = {
    ChocolateList: [
      "Hard Centered chocolate",
      "liquid Centered chocolate",
      "Soft centered chocolate",
      "Liqour center",
      "Sticky center",
      "Kit Kat",
      "Dairy Milk",
      "Chocolate Fudge",
      "Truffle chocolate",
      "Ferrao Rocher chocolate",
    ],
  };

  render() {
    return (
      <section id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <div className="row">
                <div className="col-lg-6 col-12 dessertLeftSection">
                  <div className="spacingArround">
                    <h3 className="cakeHeading">Chocolate</h3>
                    <ul className="cakeMenu">
                      {this.state.ChocolateList.map((choconame, index) => {
                        return (
                          <li key={index} className="cakeList">
                            {choconame}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="spacingArround">
                    <img src={choco} className="cakeListImage"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Chocolate;
