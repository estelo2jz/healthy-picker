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

import ProductName from './productName';

class Fruits extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className="fruit-container">
        <div className="fruit-border">
          <img src={Apple} className="fruit-image"  alt=""/>
          <ProductName name="Apple" />
        </div>
        <div className="fruit-border">
          <img src={Apricot} className="fruit-image" alt=""/>
          <ProductName name="Apricot" />
        </div>
        <div className="fruit-border">
          <img src={Avocado} className="fruit-image" alt=""/>
          <ProductName name="Avocado" />

        </div>
        <div className="fruit-border">
          <img src={Banana} className="fruit-image" alt=""/>
          <ProductName name="Banana" />

        </div>
        <div className="fruit-border">
          <img src={Blackberry} className="fruit-image" alt=""/>
          <ProductName name="Blackberry" />

        </div>
        <div className="fruit-border">
          <img src={Blueberry} className="fruit-image" alt=""/>
          <ProductName name="Blueberry" />

        </div>
        <div className="fruit-border">
          <img src={Cherry} className="fruit-image" alt=""/>
          <ProductName name="Cherry" />

        </div>
        <div className="fruit-border">
          <img src={Coconut} className="fruit-image" alt=""/>
          <ProductName name="Coconut" />

        </div>
        <div className="fruit-border">
          <img src={Fig} className="fruit-image" alt=""/>
          <ProductName name="Fig" />

        </div>
        <div className="fruit-border">
          <img src={Kiwi} className="fruit-image" alt=""/>
          <ProductName name="Kiwi" />

        </div>
        <div className="fruit-border">
          <img src={Leche} className="fruit-image" alt=""/>
          <ProductName name="Leche" />

        </div>
        <div className="fruit-border">
          <img src={Lemon} className="fruit-image" alt=""/>
          <ProductName name="Lemon" />

        </div>
        <div className="fruit-border">
          <img src={Lime} className="fruit-image" alt=""/>
          <ProductName name="Lime" />

        </div>
        <div className="fruit-border">
          <img src={Mango} className="fruit-image" alt=""/>
          <ProductName name="Mango" />

        </div>
        <div className="fruit-border">
          <img src={Nectarine} className="fruit-image" alt=""/>
          <ProductName name="Nectarine" />

        </div>
        <div className="fruit-border">
          <img src={Passion} className="fruit-image" alt=""/>
          <ProductName name="Passion Fruit" />

        </div>
        <div className="fruit-border">
          <img src={Pear} className="fruit-image" alt=""/>
          <ProductName name="Pear" />

        </div>
        <div className="fruit-border">
          <img src={Pine} className="fruit-image" alt=""/>
          <ProductName name="Pine" />

        </div>
        <div className="fruit-border">
          <img src={Prach} className="fruit-image" alt=""/>
          <ProductName name="Prach" />

        </div>
        <div className="fruit-border">
          <img src={Straw} className="fruit-image" alt=""/>
          <ProductName name="Strawberry" />

        </div>
        <div className="fruit-border">
          <img src={Water} className="fruit-image" alt=""/>
          <ProductName name="Watermelon" />

        </div>
      </div>
    )
  }
}

export default Fruits;