import React, { Component } from 'react';
import './App.css';
import ArticleList from './Article/ArticleList.js';
import Topbar from './Topbar/Topbar.js';
import noImg from './../assets/image/no-img.png';
import feed from './feed.json';
import axios from 'axios';

class App extends Component {
  categories = [
    { id: 1, name: 'POLITICS', color: '#080808'}
  ];

  authors = [
    { id: 1, name: 'Creed Bratton', avatar: noImg }
  ];

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`./${this.props.subreddit}.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });
  }

  render() {
    return (
      <div className="app">
        <Topbar></Topbar>
        <div className="content">
          <ArticleList articles={feed}></ArticleList>
        </div>
      </div>
    );
  }
}

export default App;
