import React, { Component } from "react";
import "./Style/Gallary.css";

class Gallary extends Component {

  render() {

    return (
      <section id="header" className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 gallryDesc">
              <h1 className="gallaryHeading">Cake Gallery</h1>
              <p className="gallaryinfo">
                Pre Ordered customize cake 2-8 days in advance
              </p>
              <p className="gallaryinfo">
                Pre Ordered for normal cake 4-5 hourse
              </p>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Gallary;
