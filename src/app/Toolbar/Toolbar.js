import React, { Component } from 'react';
import './Toolbar.css';
import logo from './../../assets/image/logo.png';
import menu from './../../assets/image/menu.png';

class Toolbar extends Component {

  constructor(props){
    super(props);
    this.state = {
      showMenu: false
    }
  }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  renderMenu(){
    return <div className={this.state.showMenu ? 'menu' : 'menu hide'}>
      <ul>
        <li><a href="POLITICS">POLITICS</a></li>
        <li><a href="BUSINESS">BUSINESS</a></li>
        <li><a href="TECH">TECH</a></li>
        <li><a href="SCIENCE">SCIENCE</a></li>
        <li><a href="SPORTS">SPORTS</a></li>
        <li><a href="LOGIN">LOGIN</a></li>
      </ul>
    </div>
  }

  render() {
    return (
      <div className="toolbar">
        <img className="logo" src={logo} alt="logo" />
        <button type="button" className="menu-button" onClick={this.toggleMenu}>
          <img className="menu-icon" src={menu} alt="menu button" />
        </button>
        {this.renderMenu()}
      </div>
    );
  }
}

export default Toolbar;
