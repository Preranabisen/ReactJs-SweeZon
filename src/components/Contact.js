import React, { Component } from "react";
import "./Style/Contact.css";
import whatsapp from "./assets/images/whatsapp.png"
class Contact extends Component {
  render() {
    return (
      <section id="header" className="contactView">
        <div className="contactUpperView">
          <h2 className="contactHeading">Get In Touch</h2>
          <p className="contactDesc">Enjoy Your Celebrations With Us!</p>
        </div>
        <div className="container-fluid">
          <div className="row contactLowerView">
            <div className="col-12">
              <div className="ContactForm">
                <div className="row">
                  <div className="col-lg-6 col-12 contactLeftSection">
                    <div className="contactOption">
                      <i className="fas fa-phone-alt"></i>
                      <p className="contactText">Call Now</p>
                    </div>
                    <div className="contactOption">
                      <img src={whatsapp} className="whatsappImage"></img>
                      <p className="contactText">WhatsApp</p>
                    </div>
                    <div className="contactOption">
                      <i className="fas fa-directions"></i>
                      <p className="contactText">Get Locations</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="contactRightSection contactAddress">
                      <div className="contactOption">
                        <i className="fas fa-location-arrow"></i>
                        <p className="contactLocation">
                          Gajanana Nagar, Omkar Nagar, Nagpur - 440027
                        </p>
                      </div>
                    </div>
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

export default Contact;
