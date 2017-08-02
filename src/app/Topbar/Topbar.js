import React, { Component } from 'react';
import './Topbar.css';
import logo from './../../assets/image/logo.png';
import menu from './../../assets/image/menu.png';

class Topbar extends Component {
  render() {
    return (
      <div className="topbar-wrapper">
        <div className="topbar">
          <img className="logo" src={logo} alt="logo" />
          <button type="button" className="menu-button">
            <img className="menu-icon" src={menu} alt="menu button" />
          </button>
          <div className="menu">
            <ul>
              <li><a href="POLITICS">POLITICS</a></li>
              <li><a href="BUSINESS">BUSINESS</a></li>
              <li><a href="TECH">TECH</a></li>
              <li><a href="SCIENCE">SCIENCE</a></li>
              <li><a href="SPORTS">SPORTS</a></li>
              <li><a href="LOGIN">LOGIN</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
