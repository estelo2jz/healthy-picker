import React, { Component } from 'react'

class ProductName extends Component {
  render() {
    const { className, name } = this.props; 
    return (
      <div className={`${className} page-title`}>
        + {name}
      </div>
    )
  }
}

export default ProductName;