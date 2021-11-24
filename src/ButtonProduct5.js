import React from 'react'

import irene from './imgs/irene-kredenets-tcVH_BwHtrc-unsplash.jpg'

export default function ButtonProduct5() {
  return (
    <button className="images">
      <img
        className="imgs-products"
        src={irene}
        alt="Product Brown Purse"
        width="350px"
      />
      <div>Purse</div>
      <div>Price tag</div>
    </button>
  )
}
