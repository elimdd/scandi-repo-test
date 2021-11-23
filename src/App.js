import Logo from './Logo'
import Pages from './Pages'
import Currency from './Currency'
import Bag from './Bag'
import Products from './Products'
import './App.css'

function App() {
  return (
    <body>
      <header className="nav-header">
        <span className="sideA">
          <Pages />
        </span>
        <Logo />
        <span className="sideB">
          <Currency />
          <Bag />
        </span>
      </header>
      <section className="background">
        <Products />
      </section>
    </body>
  )
}

export default App
