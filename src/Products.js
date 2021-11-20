import React from 'react'
import logo from './logo.svg'

export default function Products() {
  return (
    <section>
      <div>
        <button className="images">
          <img src={logo} className="app-logo" alt="logo" />
          <div>Blouse</div>
          <div>Price tag</div>
        </button>
        <button className="images">
          <img src={logo} className="app-logo" alt="logo" />
          <div>Sunglasses</div>
          <div>Price tag</div>
        </button>
        <button className="images">
          <img src={logo} className="app-logo" alt="logo" />
          <div>Purse</div>
          <div>Price tagGGGG</div>
        </button>
      </div>
      <div>
        <button className="images">
          <img src={logo} className="app-logo" alt="logo" />
          <div>Shirt</div>
          <div>Price tag</div>
        </button>
        <button className="images">
          <img src={logo} className="app-logo" alt="logo" />
          <div>T-shirt</div>
          <div>Price tag</div>
        </button>
        <button className="images">
          <img src={logo} className="app-logo" alt="logo" />
          <div>T-shirt</div>
          <div>Price tag</div>
        </button>
      </div>
    </section>
  )
}
