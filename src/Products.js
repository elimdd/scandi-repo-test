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
          <img
            className="imgs-products"
            src={sebastian}
            alt="Product Brown Sunglasses"
            width="350px"
          />
          <div>Sunglasses</div>
          <div>Price tag</div>
        </button>
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
      </div>
      <div>
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
      </div>
    </section>
  )
}
