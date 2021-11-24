import React from 'react'

import nimble from './imgs/nimble-made-hMMXhKSZk7k-unsplash.jpg'

export default function ButtonProduct6() {
  return (
    <button className="images">
      <img
        className="imgs-products"
        src={nimble}
        alt="Product Formal Shirt"
        width="350px"
      />
      <div>Shirt</div>
      <div>Price tag</div>
    </button>
  )
}
