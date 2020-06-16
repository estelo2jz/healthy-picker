import React, { Component } from 'react';
import Beef from "../../assets/PROTEIN/beef.jpeg";
import Chicken from "../../assets/PROTEIN/chicken.jpeg";
import Eggs from "../../assets/PROTEIN/eggs.jpeg";
import Lentils from "../../assets/PROTEIN/lentils.jpeg";
import Parmesan from "../../assets/PROTEIN/parmesan.jpeg";
import Porkchops from "../../assets/PROTEIN/porkchops.jpeg";
import PumpkinSeed from "../../assets/PROTEIN/pumpkinSeed.jpeg";
import Tofu from "../../assets/PROTEIN/tofu.jpeg";
import Tuna from "../../assets/PROTEIN/tuna.jpeg";
import Yogurt from "../../assets/PROTEIN/yogurt.jpeg";

import ProductName from './productName';

class Protein extends Component {
  render() {
    return (
      <div className="fruit-container">
        <div className="fruit-border">
          <img src={Beef} className="fruit-image" alt="beef" />
          <ProductName name="Beef" />
        </div>
        <div className="fruit-border">
          <img src={Chicken} className="fruit-image" alt=""/>
          <ProductName name="Chicken" />
        </div>
        <div className="fruit-border">
          <img src={Eggs} className="fruit-image" alt=""/>
          <ProductName name="Eggs" />
        </div>
        <div className="fruit-border">
          <img src={Lentils} className="fruit-image" alt=""/>
          <ProductName name="Lentils" />
        </div>
        <div className="fruit-border">
          <img src={Parmesan} className="fruit-image" alt=""/>
          <ProductName name="Parmesan" />
        </div>
        <div className="fruit-border">
          <img src={Porkchops} className="fruit-image" alt=""/>
          <ProductName name="Porkchops" />
        </div>
        <div className="fruit-border">
          <img src={PumpkinSeed} className="fruit-image" alt=""/>
          <ProductName name="Pumpkin Seed" />
        </div>
        <div className="fruit-border">
          <img src={Tofu} className="fruit-image" alt=""/>
          <ProductName name="Tofu" />
        </div>
        <div className="fruit-border">
          <img src={Tuna} className="fruit-image" alt=""/>
          <ProductName name="Tuna" />
        </div>
        <div className="fruit-border">
          <img src={Yogurt} className="fruit-image" alt=""/>
          <ProductName name="Yogurt" />
        </div>
      </div>
    )
  }
}

export default Protein;