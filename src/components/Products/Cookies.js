import React, { Component } from "react";
import "../Style/Products.css";
import cooki from "../assets/images/cooki.png";

class Cookies extends Component {
  state = {
    CookiesList: [
      "coconut cookies",
      "Jira Cookies",
      "Nankhatai",
      "Chocochips cookies",
      "Bourbon Biscuit",
    ],
    HCookiesList: [
      "Cranberry Granola cookies",
      "Protein cookies",
      "Gluten free almond flour cookies",
    ],
    SnackList: [
      "Khari puff",
      "Masala Khari",
      "Pamer",
      "Cheese Straw",
      "Masroom Puff",
      "Pattice",
      "Parcel Puff",
      "Croissont",
      "Cream Roll",
      "Donuts ( all types)",
      "Pesto & Stuff Khari",
      "Sandwich Bread",
      "Pizza",
      "Pav Bread",
      "Garlic Bread",
      "Herbed Focaccia",
      "French Baguettes",
      "Stuffed Buns & Roll",
      "Pull Apart Bread",
      "Dikhush Bread",
      "Subway bread ( Hot dog)",
      "Zingy Parcel",
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
                    <img src={cooki}></img>
                    <div>
                      <h3 className="cakeHeading">Cookies</h3>
                      <ul className="cakeMenu">
                        {this.state.CookiesList.map((cookiename, index) => {
                          return (
                            <li key={index} className="cakeList">
                              {cookiename}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div>
                      <h3 className="cakeHeading">Healthy cookies</h3>
                      <ul className="cakeMenu">
                        {this.state.HCookiesList.map((hcookiename, index) => {
                          return (
                            <li key={index} className="cakeList">
                              {hcookiename}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="spacingArround">
                    <h3 className="cakeHeading">Snacks</h3>
                    <ul className="cakeMenu">
                      {this.state.SnackList.map((snackname, index) => {
                        return (
                          <li key={index} className="cakeList">
                            {snackname}
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

export default Cookies;
