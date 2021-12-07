import Logo from './Logo'
import Pages from './Pages'
import Currency from './Currency'
import Bag from './Bag'
import Products from './Products'
import './App.css'

function App() {
  return (
    <div>
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
    </div>
  )
}

export default App
