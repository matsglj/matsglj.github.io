import React, { Component } from "react";
import {
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Huddly from "./pages/Huddly";
import Macandmia from "./pages/Macandmia";
import Barlift from "./pages/Barlift";
import Contact from "./pages/Contact";
import "./styles/index.css";
 
class Main extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showNavbar: false
    };
  };

  toggleNavbar() {
    this.setState({
      showNavbar: !this.state.showNavbar
    });
  }

  render() {
    return (
      <div
        className={`main ${this.state.showNavbar? 'navbarVisible' : 'navbarHidden' }`}>
        <div className="navigation">
          <h4><span className="title">Mats G L Johansen</span>
            <a
              onClick={this.toggleNavbar.bind(this)}
            ><span className="menuIcon">
               {this.state.showNavbar? '\u2715' : '\u2630' } 
            </span>
            </a>
          </h4>
          <ul className="header">
            <li>
              <NavLink
                onClick={this.toggleNavbar.bind(this)}
                exact to="/">
                Hello
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={this.toggleNavbar.bind(this)}
                to="/work">
                What I do
              </NavLink>
            </li>
            <ul>
              <li>
                <NavLink
                  onClick={this.toggleNavbar.bind(this)}
                  to="/huddly">
                  Huddly
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={this.toggleNavbar.bind(this)}
                  to="/macandmia">
                  Mac &amp; Mia
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={this.toggleNavbar.bind(this)}
                  to="/barlift">
                  BarLift
                </NavLink>
              </li>
            </ul>
            <li>
              <NavLink
                onClick={this.toggleNavbar.bind(this)}
                to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <Route exact path="/" component={Home}/>
        <Route path="/work" component={Work}/>
        <Route path="/huddly" component={Huddly}/>
        <Route path="/macandmia" component={Macandmia}/>
        <Route path="/barlift" component={Barlift}/>
        <Route path="/contact" component={Contact}/>
      </div>
    );
  }
}
 
export default Main;
