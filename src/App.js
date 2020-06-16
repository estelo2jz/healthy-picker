import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './styles/main.scss';

import Home from './components/home';
import Fruits from './components/navigation/fruits';
import Grains from './components/navigation/grains';
import Vegetables from './components/navigation/vegetables';
import Protein from './components/navigation/protein';

// const Home = () => {
//   return (
//     <div>
//       <p>Home</p>
//     </div>
//   );
// };

// const About = () => {
//   return (
//     <div>
//       <p>About</p>
//     </div>
//   );
// };

// const Contact = () => {
//   return (
//     <div>
//       <p>Contact</p>
//     </div>
//   );
// };

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <div className="title">
            {/* <Link to="home"> */}
              <h1>Healthy Picker!</h1>
            {/* </Link>   */}
          </div>
          <nav className="nav">
            <div className="nav-container">
              {/* <li className="nav-links">
                <Link exact to="/home" activeclassName='active' className="categories">Home</Link>
              </li> */}
              <div className="nav-links">
                <Link to="/fruits" activeclassName='active' className="categories">Fruits</Link>
              </div>
              <div className="nav-links">
                <Link to="/grains" activeclassName='active' className="categories">Grains</Link>
              </div>
              <div className="nav-links">
                <Link to="/vegetables" activeclassName='active' className="categories">Vegetables</Link>
              </div>
              <div className="nav-links">
                <Link to="/protein" activeclassName='active' className="categories">Protein</Link>
              </div>
            </div>
          </nav>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/fruits" component={Fruits} />
            <Route path="/grains" component={Grains} />
            <Route path="/vegetables" component={Vegetables} />
            <Route path="/protein" component={Protein} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;