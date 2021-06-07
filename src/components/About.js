import React, { Component } from "react";
import "./Style/About.css";
import cake1 from "./assets/images/cake1.jpg";
import donuts from "./assets/images/donuts.jpeg";
import chocolates from "./assets/images/chocolate.jpeg";
import icecream from "./assets/images/icecream.jpg";
import cookies from "./assets/images/cookies.jpeg";
class About extends Component {
  render() {
    return (
      <section id="header" className="aboutView">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <div className="row">
                <div className="col-lg-7 col-12 leftAboutSection">
                  <h3 className="aboutHeading">ABOUT US</h3>
                  <p className="aboutDecs">
                    Sweezon is Indian cakes, snacks and sweet bakery started on
                    19 November 2020. Sweezon has various varieties of cakes,
                    pastries, cookies, snacks, international desserts, Ice creams,
                    & chocolates.
                  </p>
                  <p className="aboutDecs">
                    Homemade fresh delicious and eggless cakes are available and can be deliverable
                    in Nagpur.
                  </p>
                </div>
                <div className="col-lg-5 col-12 rightAboutSection">
                  <img src={cake1}></img>
                </div>
              </div>
            </div>
          </div>
          
          <div className="aboutImageView">
            <img src={donuts} className="aboutImage"></img>

            <img src={chocolates} className="aboutImage"></img>

            <img src={icecream} className="aboutImage"></img>

            <img src={cookies} className="aboutImage"></img>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
