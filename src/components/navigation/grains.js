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


class Grains extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className="fruit-container">
        <div className="fruit-border">
          <img src={Bagel} className="fruit-image" />
        </div>
        <div className="fruit-border">
          <img src={Bread} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Cereal} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Creacker} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Crosant} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Granola} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Macaroni} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Oatmeal} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Rice} className="fruit-image"/>
        </div>
      </div>
    )
  }
}

export default Grains;