import React from 'react'

import sebastian from './imgs/sebastian-coman-travel-dtOTQYmTEs0-unsplash.jpg'

export default function ButtonProduct1() {
  return (
    <button className="images">
      <img
        className="imgs-products"
        src={sebastian}
        alt="Product Brown Sunglasses"
        width="350px"
      />
      <div>Sunglasses</div>
      <div>Price tag</div>
    </button>
  )
}
