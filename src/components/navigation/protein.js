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



class Protein extends Component {
  render() {
    return (
      <div className="fruit-container">
        <div className="fruit-border">
          <img src={Beef} className="fruit-image" />
        </div>
        <div className="fruit-border">
          <img src={Chicken} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Eggs} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Lentils} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Parmesan} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Porkchops} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={PumpkinSeed} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Tofu} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Tuna} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Yogurt} className="fruit-image"/>
        </div>
      </div>
    )
  }
}

export default Protein;