import { Header } from './components';
import { Consejos, Inicio, Info, Galeria } from './views';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';



function App() {

  return (
    <div className="App">
      
      <Router>
      
        <nav className="navbar">
         
          <ul className="navbar-nav">
            <li className="nav-item nav-logo">
              
              <img src="/assets/logo_no_text.png" alt=""/>
              
            
              
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fa fa-home fa-3x" aria-hidden="true"></i>
                <span className="link-text">Inicio</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/consejos"  className="nav-link">
                <i className="fa fa-heart fa-3x" aria-hidden="true"></i>
                <span className="link-text">Consejos</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/info"  className="nav-link">
                <i className="fa fa-exclamation fa-3x" aria-hidden="true"></i>
                <span className="link-text">Informate</span>
              </Link>
            </li>
            <li className="nav-item" >
              <Link to="/galeria"  className="nav-link">
                <i className="fa fa-camera-retro fa-3x" aria-hidden="true"></i>
                <span className="link-text">Galeria</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/"  className="nav-link">
                <i className="fa fa-comments fa-3x" aria-hidden="true"></i>
                <span className="link-text">Testimonios</span>
              </Link>
            </li>
            <li className="nav-item" >
              <Link to="/"  className="nav-link">
                <i className="fa fa-address-card-o fa-3x" aria-hidden="true"></i>
                <span className="link-text">Contacto</span>
              </Link>
            </li>
          </ul>
        </nav>

        <Header/>
        <Switch >
          <Route path="/consejos">
            <Consejos />
          </Route>
         
          <Route path="/info">
            <Info/>
          </Route>
          <Route path="/galeria">
            <Galeria/>
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
