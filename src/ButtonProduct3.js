import React from 'react'

import bianca from './imgs/bianca-castillo-gbq6pdUX6EY-unsplash (1).jpg'

export default function ButtonProduct3() {
  return (
    <button className="images">
      <img
        className="imgs-products"
        src={bianca}
        alt="Product white Blouse"
        width="350px"
      />
      <div>Blouse</div>
      <div>Price tag</div>
    </button>
  )
}
