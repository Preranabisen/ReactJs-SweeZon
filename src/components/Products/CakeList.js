import React, { Component } from "react";
import "../Style/Products.css";
import cakelist from "../assets/images/cakelist.png";

class CakeList extends Component {
  state = {
    CakeList: [
      "Simple cake",
      "Fondant cake",
      "Pinata cake",
      "Pull me up cake",
      "Semi fondant cake",
      "Doll Cake",
      "Marble Cake",
      "Tiger Print Cake",
      "Truffle Cake",
      "so mold Cake",
      "Island cake",
      "Geode cake",
      "Unicorn Cake",
      "Rum cake",
      "Pastries",
      "Cup Cakes",
      "Teatime cake",
      "Dry fruits cake",
      "Healthy cakes (wheat, Ragi flour, Jawari flour, oats)",
      "Brownies",
      "Photo Cake",
      "Fault Line Cake",
      "Cappuccino walnut cake",
      "Bounty Cake",
      "Wedding cake",
      "Carving cake",
      "Standing heart",
      "3D Heart",
      "Gravity tonic cake",
      "Plum cake",
      "Theme cakes ( Baby shower, makeup, paithani saree, engagement, business man, all customize cakes)",
    ],
    CakeFlavour: [
      "Chocolate",
      "Pineapple",
      "Blueberry",
      "Strawberry",
      "White forest",
      "Black forest",
      "Butterscotch",
      "Mix fruit",
      "Casata",
      "Rasmalai",
      "Kajumalai",
      "KesarPista  & Kesar Ilaichi& Kesar Kulfi ",
      "Kiwi",
      "Sitafal (custard apple)",
      "Blackcurrent",
      "Rose and Pan",
      "Cheese cake",
      "Red velvet cake",
      "Chocoberry cake",
      "Pinnacolada",
      "Orange",
      "Gulabjamun",
      "Motichur laddoo",
      "Kaju Katli",
      "Mango",
      "Finger Millet chocochips (teatime cakes)",
      "Dates Cake",
      "Gluten Free dry fruits (healthy cakes)",
      "Honey Bell",
      "Parsi Mava Cake",
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
                    <h3 className="cakeHeading">Types of Cake</h3>
                    <ul className="cakeMenu">
                      {this.state.CakeList.map((cakename, index) => {
                        return (
                          <li key={index} className="cakeList">
                            {cakename}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="spacingArround">
                    <img src={cakelist} className="cakeListImage"></img>
                    <h3 className="cakeHeading">Types of cakes flavor</h3>
                    <ul className="cakeMenu">
                      {this.state.CakeFlavour.map((cakefla, index) => {
                        return (
                          <li key={index} className="cakeList">
                            {cakefla}
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

export default CakeList;
