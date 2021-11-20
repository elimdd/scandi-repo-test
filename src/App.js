import Logo from './Logo'
import Pages from './Pages'
import Currency from './Currency'
import Bag from './Bag'
import Products from './Products'
import './App.css'

function App() {
  return (
    <div className="background">
      <header className="nav-header">
        <Pages />
        <Logo />
        <Currency />
        <Bag />
      </header>
      <section>
        <Products />
      </section>
    </div>
  )
}

export default App
