import React, { Component } from 'react';
import './App.css';
import ArticleList from './Article/ArticleList.js';
import Toolbar from './Toolbar/Toolbar.js';
import fetch from './Helpers/Request'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      feed: [],
      isLoading: true
    }
  }

  componentDidMount() {
    this.loadFeed();

    setInterval(() => {
      this.loadFeed();
    }, 40000)
  }

  loadFeed(){
    fetch.get('article/')
    .then(res => {
      this.setState({
        feed: res.results,
        isLoading: false
      });
    });

  }

  render() {
    if(this.state.isLoading){
      return(
        <i className="fa fa-spinner fa-spin">loading</i>
      )
    } else {
      return(
        <div className="app">
          <div className="topbar">
            <Toolbar></Toolbar>
          </div>
          <div className="content">
            <ArticleList articles={this.state.feed}></ArticleList>
          </div>
        </div>
      )
    }
  }
}

export default App;
