import React from 'react'

import drop from './imgs/drop-the-label-movement-htMsuMd3npg-unsplash.jpg'

export default function ButtonProduct4() {
  return (
    <button className="images">
      <img
        className="imgs-products"
        src={drop}
        alt="Product White T-shirt "
        width="350px"
      />
      <div>T-shirt</div>
      <div>Price tag</div>
    </button>
  )
}
