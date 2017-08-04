import React, { Component } from 'react';
import './App.css';
import ArticleList from './Article/ArticleList.js';
import Toolbar from './Toolbar/Toolbar.js';
import fetch from './Helpers/Request'

export const fetchFeed = () => {
  let category = window.location.pathname.split('/').filter(function(el){ return !!el; }).pop();
  return fetch.get(`article/${category || ''}`);
}

class App extends Component {

  static defaultProps = { fetchFeed };

  category = ''

  constructor(props){
    super(props);
    this.state = {
      feed: [],
      isLoading: true,
      failedToFetch: false,
      category: undefined
    }
  }

  componentDidMount() {
    this.loadFeed();

    setInterval(() => {
      this.loadFeed();
    }, 40000);
  }

  setFetchData = (res) => {
    if(res && res.results){
      this.setState({
        feed: res.results,
        isLoading: false
      });
    } else {
        this.setFailedToFetch();
    }
  }

  setFailedToFetch = (err) => {
    this.setState({
      failedToFetch: true,
      isLoading: false
    });
  }

  loadFeed() {
    return this.props.fetchFeed()
    .then(this.setFetchData, this.setFailedToFetch)
    .catch(this.setFailedToFetch);

  }

  render() {
    if(this.state.isLoading){
      return(
        <i>Loading news. Please, wait.</i>
      )
    } else if(this.state.failedToFetch){
      return(
        <i>Oh no!!! Problems loading the news. Please, try again later.</i>
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
