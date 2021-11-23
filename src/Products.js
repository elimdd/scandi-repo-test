import React from 'react'

import './Products.css'

import sebastian from './imgs/sebastian-coman-travel-dtOTQYmTEs0-unsplash.jpg'
import alex from './imgs/alex-bracken-O8kzGM1K5fU-unsplash (2).jpg'
import bianca from './imgs/bianca-castillo-gbq6pdUX6EY-unsplash (1).jpg'
import drop from './imgs/drop-the-label-movement-htMsuMd3npg-unsplash.jpg'
import irene from './imgs/irene-kredenets-tcVH_BwHtrc-unsplash.jpg'
import nimble from './imgs/nimble-made-hMMXhKSZk7k-unsplash.jpg'

export default function Products() {
  return (
    <section>
      <div>
        <button className="images">
          <img src={sebastian} alt="product" width="350px" />
          <div>Blouse</div>
          <div>Price tag</div>
        </button>
        <button className="images">
          <img src={alex} alt="product" width="350px" />
          <div>Sunglasses</div>
          <div>Price tag</div>
        </button>
        <button className="images">
          <img src={bianca} alt="product" width="350px" />
          <div>Purse</div>
          <div>Price tag</div>
        </button>
      </div>
      <div>
        <button className="images">
          <img src={drop} alt="product" width="350px" />
          <div>Shirt</div>
          <div>Price tag</div>
        </button>
        <button className="images">
          <img src={irene} alt="product" width="350px" />
          <div>T-shirt</div>
          <div>Price tag</div>
        </button>
        <button className="images">
          <img src={nimble} alt="product" width="350px" />
          <div>T-shirt</div>
          <div>Price tag</div>
        </button>
      </div>
    </section>
  )
}
