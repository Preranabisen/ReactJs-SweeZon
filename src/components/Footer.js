import React, { Component } from "react";
import "./Style/Footer.css";
import facebook from "./assets/images/facebook.png";
import youtube from "./assets/images/youtube.png";
import instagram from "./assets/images/Instagram.png";
import linkedin from "./assets/images/linkedin.png";

class Footer extends Component {
  render() {
    return (
      <section id="header" className="footerView">
        <div className="footerUpperView">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4">
                <p className="socialHeading">Spread The Love</p>
                <div className="socialLogin">
                  <img src={facebook} className="socialImage"></img>
                  <img src={youtube} className="socialImage"></img>
                  <img src={instagram} className="socialImage"></img>
                  <img src={linkedin} className="socialImage"></img>
                </div>
              </div>
              <div className="col-lg-4">
                <p className="socialDesc">About Us</p>
                <p className="socialDesc">Our Products</p>
                <p className="socialDesc">Contact us</p>
              </div>
              <div className="col-lg-4">
                <p className="socialDesc">Privacy Policy</p>
                <p className="socialDesc">Terms and Conditions</p>
                <p className="socialDesc">Contact us</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footerLowerView">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <p className="socialDesc">© 2020 SweeZon. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
