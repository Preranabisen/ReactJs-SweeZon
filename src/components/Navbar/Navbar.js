import React, { Component } from "react";
import "./Navbar.css";
import logo from '../assets/images/logo.png'
class Navbar extends Component {
  state = {
    MenuItems: [
      
      {
        title: "Home",
        url: "/",
        cName: "nav-links",
      },
      {
        title: "About Us",
        url: "/about",
        cName: "nav-links",
      },
      {
        title: "Our Products",
        url: "/products",
        cName: "nav-links",
      },
      {
        title: "Contact Us",
        url: "/contact",
        cName: "nav-links",
      },
    ],
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo"><img src={logo} className="logoImage"></img></h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {this.state.MenuItems.map((item, index) => {
            return (
              <li key={index} className="navitem">
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
