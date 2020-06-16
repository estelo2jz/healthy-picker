import React, { Component } from 'react';
import Apple from "../../assets/FRUITS/apple.jpeg";
import Apricot from "../../assets/FRUITS/apricot.jpeg";
import Avocado from "../../assets/FRUITS/avocado.jpeg";
import Banana from "../../assets/FRUITS/banana.jpeg";
import Blackberry from "../../assets/FRUITS/blackberry.jpeg";
import Blueberry from "../../assets/FRUITS/blueberry.jpeg";
import Cherry from "../../assets/FRUITS/cherry.jpeg";
import Coconut from "../../assets/FRUITS/coconut.jpeg";
import Fig from "../../assets/FRUITS/fig.jpeg";
import Kiwi from "../../assets/FRUITS/kiwi.jpeg";
import Leche from "../../assets/FRUITS/leche.jpeg";
import Lemon from "../../assets/FRUITS/lemon.jpeg";
import Lime from "../../assets/FRUITS/lime.jpeg";
import Mango from "../../assets/FRUITS/mango.jpeg";
import Nectarine from "../../assets/FRUITS/nectarine.jpeg";
import Passion from "../../assets/FRUITS/passion.jpeg";
import Pear from "../../assets/FRUITS/pear.jpeg";
import Pine from "../../assets/FRUITS/pine.jpeg";
import Prach from "../../assets/FRUITS/prach.jpeg";
import Straw from "../../assets/FRUITS/straw.jpeg";
import Water from "../../assets/FRUITS/water.jpeg";


class Fruits extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className="fruit-container">
        <div className="fruit-border">
          <img src={Apple} className="fruit-image" />
        </div>
        <div className="fruit-border">
          <img src={Apricot} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Avocado} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Banana} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Blackberry} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Blueberry} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Cherry} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Coconut} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Fig} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Kiwi} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Leche} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Lemon} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Lime} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Mango} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Nectarine} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Passion} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Pear} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Pine} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Prach} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Straw} className="fruit-image"/>
        </div>
        <div className="fruit-border">
          <img src={Water} className="fruit-image"/>
        </div>
      </div>
    )
  }
}

export default Fruits;