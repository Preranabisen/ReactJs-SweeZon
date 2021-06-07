import React, { Component } from "react";
import "../Style/Products.css";
import dessert from "../assets/images/dessert.png";

class Dessert extends Component {
  state = {
    DessertList: [
      "Bread Pudding",
      "Chocolate french dessert",
      "Jar Cake",
      "Cakesicles",
      "Caramel Custurd",
      "Chocolate Mousse cake",
      "Maccrons",
      "Appli pie",
      "Chocolate Tart",
      "Pan Bahar Balls",
      "Choco Lawa cake",
      "Cheese rainbow Mousse",
      "Bloundies ( flavours available)",
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
                    <img src={dessert}></img>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="spacingArround">
                    <h3 className="cakeHeading">International Dessert</h3>
                    <ul className="cakeMenu">
                      {this.state.DessertList.map((dessertname, index) => {
                        return (
                          <li key={index} className="cakeList">
                            {dessertname}
                          </li>
                        );
                      })}
                    </ul>
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

export default Dessert;
