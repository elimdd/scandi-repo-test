import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="background">
      <header className="nav-header">
        <span cassName="navLeftButtons">
          <button className="navNameTags">
            <a href="/">Women</a>
          </button>
          <button className="navNameTags">
            <a href="/">Men</a>
          </button>
          <button className="navNameTags">
            <a href="/">Kids</a>
          </button>
        </span>
        <span>
          <img src={logo} className="app-logo-top" alt="logo" />
        </span>
        <span className="navRightButtons">
          <button className="navNameTags">
            <a href="/">$</a>
          </button>
          <button className="navNameTags">
            <a href="/">Bag</a>
          </button>
        </span>
      </header>
      <section>
        <div>
          <button>
            <img src={logo} className="app-logo" alt="logo" />
            <div>Blouse</div>
            <div>Price tag</div>
          </button>
          <button>
            <img src={logo} className="app-logo" alt="logo" />
            <div>Sunglasses</div>
            <div>Price tag</div>
          </button>
          <button>
            <img src={logo} className="app-logo" alt="logo" />
            <div>Purse</div>
            <div>Price tag</div>
          </button>
        </div>
        <div>
          <button>
            <img src={logo} className="app-logo" alt="logo" />
            <div>Shirt</div>
            <div>Price tag</div>
          </button>
          <button>
            <img src={logo} className="app-logo" alt="logo" />
            <div>T-shirt</div>
            <div>Price tag</div>
          </button>
          <button>
            <img src={logo} className="app-logo" alt="logo" />
            <div>T-shirt</div>
            <div>Price tag</div>
          </button>
        </div>
      </section>
    </div>
  )
}

export default App
