import React from 'react'
import ButtonProduct1 from './ButtonProduct1'
import ButtonProduct2 from './ButtonProduct2'
import ButtonProduct3 from './ButtonProduct3'
import ButtonProduct4 from './ButtonProduct4'
import ButtonProduct5 from './ButtonProduct5'
import ButtonProduct6 from './ButtonProduct6'

import './Products.css'

export default function Products() {
  return (
    <section>
      <div>
        <container>
          <ButtonProduct1 />
        </container>
        <container>
          <ButtonProduct2 />
        </container>
        <container>
          <ButtonProduct3 />
        </container>
      </div>
      <div>
        <container>
          <ButtonProduct4 />
        </container>
        <container>
          <ButtonProduct5 />
        </container>
        <container>
          <ButtonProduct6 />
        </container>
      </div>
    </section>
  )
}
