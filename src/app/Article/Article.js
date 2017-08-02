import React, { Component } from 'react';
import './Article.css';
import Img from 'react-image'
import noImg from './../../assets/image/no-img.png';

class Article extends Component {
  render() {
    return (
      <div className="article highlight-article">
        <p className="article-category">{this.props.article.category.name}</p>
        <Img 
          className="article-image"
          alt="article"
          src={[this.props.article.images ? this.props.article.images.thumb : undefined, noImg]}
        ></Img>
        <p className="article-title">
          {this.props.article.title}
        </p>
        <div className="author">
          <img className="author-avatar" src={this.props.article.author.avatar} alt="author" />
          <i className="author-name">by {this.props.article.author.name}</i>
        </div>
        <p className="article-desc">
          {this.props.article.desc ? this.props.article.desc : ''}
        </p>
      </div>
    );
  }
}

export default Article;
