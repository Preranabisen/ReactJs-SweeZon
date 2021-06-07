import React, { Component } from "react";
import CakeList from "./Products/CakeList";
import Chocolate from "./Products/Chocolate";
import Dessert from "./Products/Dessert";
import Cookies from "./Products/Cookies";
import "./Style/Products.css";


class Products extends Component {
  render() {
    return (
      <div className="productsView">
        <CakeList></CakeList>
        <Dessert></Dessert>
        <Chocolate></Chocolate>
        <Cookies></Cookies>
      </div>
    );
  }
}

export default Products;
