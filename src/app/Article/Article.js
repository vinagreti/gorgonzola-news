import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
  render() {
    return (
      <div className="article highlight-article">
        <p className="article-category">{this.props.article.category.name}</p>
        <img className="article-image" src={this.props.article.images.thumb} alt="article" />
        <p className="article-title">
          {this.props.article.title}
        </p>
        <div className="author">
          <img className="author-avatar" src={this.props.article.author.avatar} alt="author" />
          <i className="author-name">by {this.props.article.author.name}</i>
        </div>
        <p className="article-desc">
          {this.props.article.desc}
        </p>
      </div>
    );
  }
}

export default Article;
