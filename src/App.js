import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="topbar-wrapper">
          <div className="topbar">
            <div className="logo">C</div>
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
            <div className="menu-icon">M</div>
          </div>
        </div>
        <div className="content">

          <div className="article highlight-article">
            <p className="article-category">POLITICS</p>
            <img className="article-image" src="http://via.placeholder.com/555x354" alt="article" />
            <p className="article-title">
              Obama Offers Hopeful Vision While Noting Nation’s Fears
            </p>
            <div className="author">
              <img className="author-avatar" src="http://via.placeholder.com/300x300" alt="author" />
              <i className="author-name">by Creed Bratton</i>
            </div>
          </div>

          <div className="article secondary-article">
            <p className="article-category">POLITICS</p>
            <img className="article-image" src="http://via.placeholder.com/555x354" alt="article" />
            <p className="article-title">
              Didi Kuaidi, The Company Beating Uber In China, Opens Its API To Third Party Apps
            </p>
            <div className="author">
              <img className="author-avatar" src="http://via.placeholder.com/300x300" alt="author" />
              <i className="author-name">by Creed Bratton</i>
            </div>
            <div className="article-desc">
              One day after Uber updated its API to add ‘content experiences’ for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.
            </div>
          </div>

          <div className="article tertiary-article">
            <p className="article-category">SCIENCE</p>
            <img className="article-image" src="http://via.placeholder.com/555x354" alt="article" />
            <p className="article-title">
              Obama Offers Hopeful Vision While Noting Nation’s Fears
            </p>
            <div className="author">
              <img className="author-avatar" src="http://via.placeholder.com/300x300" alt="author" />
              <i className="author-name">by Creed Bratton</i>
            </div>
          </div>

          <div className="divider"></div>

          <div className="article minimal-article minimal-article-1">
            <p className="article-category">SCIENCE</p>
            <p className="article-title">
              Obama Offers Hopeful Vision While Noting Nation’s Fears
            </p>
            <div className="author">
              <img className="author-avatar" src="http://via.placeholder.com/300x300" alt="author" />
              <i className="author-name">by Creed Bratton</i>
            </div>
            <div className="article-desc">
              One day after Uber updated its API to add ‘content experiences’ for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.
            </div>
          </div>

          <div className="article minimal-article minimal-article-2">
            <p className="article-category">SCIENCE</p>
            <p className="article-title">
              Obama Offers Hopeful Vision While Noting Nation’s Fears
            </p>
            <div className="author">
              <img className="author-avatar" src="http://via.placeholder.com/300x300" alt="author" />
              <i className="author-name">by Creed Bratton</i>
            </div>
            <div className="article-desc">
              One day after Uber updated its API to add ‘content experiences’ for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.
            </div>
          </div>

          <div className="article minimal-article minimal-article-3">
            <p className="article-category">SCIENCE</p>
            <p className="article-title">
              Obama Offers Hopeful Vision While Noting Nation’s Fears
            </p>
            <div className="author">
              <img className="author-avatar" src="http://via.placeholder.com/300x300" alt="author" />
              <i className="author-name">by Creed Bratton</i>
            </div>
            <div className="article-desc">
              One day after Uber updated its API to add ‘content experiences’ for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
