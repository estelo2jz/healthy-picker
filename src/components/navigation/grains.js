import React, { Component } from 'react';
import Bagel from "../../assets/GRAINS/bagel.jpeg";
import Bread from "../../assets/GRAINS/bread.jpeg";
import Cereal from "../../assets/GRAINS/cereal.jpeg";
import Creacker from "../../assets/GRAINS/creacker.jpeg";
import Crosant from "../../assets/GRAINS/crosant.jpeg";
import Granola from "../../assets/GRAINS/granola.jpeg";
import Macaroni from "../../assets/GRAINS/macaroni.jpeg";
import Oatmeal from "../../assets/GRAINS/oatmeal.jpeg";
import Rice from "../../assets/GRAINS/rice.jpeg";

import ProductName from './productName';

class Grains extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className="fruit-container">
        <div className="fruit-border">
          <img src={Bagel} className="fruit-image"  alt=""/>
          <ProductName name="Bagel" />
        </div>
        <div className="fruit-border">
          <img src={Bread} className="fruit-image" alt=""/>
          <ProductName name="Bread" />
        </div>
        <div className="fruit-border">
          <img src={Cereal} className="fruit-image" alt=""/>
          <ProductName name="Cereal" />
        </div>
        <div className="fruit-border">
          <img src={Creacker} className="fruit-image" alt=""/>
          <ProductName name="Crackers" />
        </div>
        <div className="fruit-border">
          <img src={Crosant} className="fruit-image" alt=""/>
          <ProductName name="Crossant" />
        </div>
        <div className="fruit-border">
          <img src={Granola} className="fruit-image" alt=""/>
          <ProductName name="Granola" />
        </div>
        <div className="fruit-border">
          <img src={Macaroni} className="fruit-image" alt=""/>
          <ProductName name="Macaroni" />
        </div>
        <div className="fruit-border">
          <img src={Oatmeal} className="fruit-image" alt=""/>
          <ProductName name="Oatmeal" />
        </div>
        <div className="fruit-border">
          <img src={Rice} className="fruit-image" alt=""/>
          <ProductName name="Rice" />
        </div>
      </div>
    )
  }
}

export default Grains;