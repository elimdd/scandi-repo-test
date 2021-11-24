import React from 'react'

import alex from './imgs/alex-bracken-O8kzGM1K5fU-unsplash (2).jpg'

export default function ButtonProduct2() {
  return (
    <button className="images">
      <img
        className="imgs-products"
        src={alex}
        alt="Product Black T-shirt"
        width="350px"
      />
      <div>T-shirt</div>
      <div>Price tag</div>
    </button>
  )
}
