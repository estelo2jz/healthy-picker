import React, { Component } from 'react';
import Asparagus from "../../assets/VEGES/asparagus.jpeg";
import Beans from "../../assets/VEGES/beans.jpeg";
import Broccoli from "../../assets/VEGES/broccoli.jpeg";
import BrusselsSprouts from "../../assets/VEGES/brusselsSprouts.jpeg";
import Cabbage from "../../assets/VEGES/cabbage.jpeg";
import Capsicum from "../../assets/VEGES/capsicum.jpeg";
import Carrot from "../../assets/VEGES/carrot.jpeg";
import Chillies from "../../assets/VEGES/chillies.jpeg";
import Corn from "../../assets/VEGES/corn.jpeg";
import Cucumber from "../../assets/VEGES/cucumber.jpeg";
import Eggplant from "../../assets/VEGES/eggplant.jpeg";
import Lettuce from "../../assets/VEGES/lettuce.jpeg";
import Mushroom from "../../assets/VEGES/mushroom.jpeg";
import Onions from "../../assets/VEGES/onions.jpeg";
import Peas from "../../assets/VEGES/peas.jpeg";
import Pineapple from "../../assets/VEGES/pineapple.jpeg";
import Potatoes from "../../assets/VEGES/potatoes.jpeg";
import Pumpkin from "../../assets/VEGES/pumpkin.jpeg";
import Radish from "../../assets/VEGES/radish.jpeg";
import Spinach from "../../assets/VEGES/spinach.jpeg";
import SweetPotatoes from "../../assets/VEGES/sweetPotatoes.jpeg";
import Tomatoes from "../../assets/VEGES/tomatoes.jpeg";

class Vegetables extends Component {
  render() {
    return (
      <div className="fruit-container">
        <div className="fruit-border">
          <img src={Asparagus} className="fruit-image" />
        </div>
        <div className="fruit-border">
          <img src={Beans} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Broccoli} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={BrusselsSprouts} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Cabbage} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Capsicum} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Carrot} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Chillies} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Corn} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Cucumber} className="fruit-image"/>
        </div>


        <div className="fruit-border">
          <img src={Eggplant} className="fruit-image" />
        </div>
        <div className="fruit-border">
          <img src={Lettuce} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Mushroom} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Onions} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Peas} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Pineapple} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Potatoes} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Pumpkin} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Radish} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Spinach} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={SweetPotatoes} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Tomatoes} className="fruit-image"/>
        </div>
      </div>
    )
  }
}

export default Vegetables;