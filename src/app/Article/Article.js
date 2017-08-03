import React, { Component } from 'react';
import './Article.css';
import Img from 'react-image'
import noImg from './../../assets/image/no-img.png';

class Article extends Component {

  renderDescription(){
    if(this.props.article.desc && this.props.position !== 'highlight'){
      return <p className="desc">{this.props.article.desc}</p>
    }
  }

  renderThumb(){
    if(this.props.article.thumb && this.props.position !== 'minimal'){
      return <div className="thumb-wrapper">
        <Img 
          className="image"
          alt="article"
          src={[this.props.article.thumb, noImg]}
        ></Img>
      </div>
    }
  }

  renderAvatar(){
    if(this.props.article.author){
      return <Img 
        className="author-avatar"
        alt="article"
        src={[this.props.article.author.avatar, noImg]}
      ></Img>
    }
  }

  render() {
    return (
      <div className="article">
        <p className="category"
          style={{color: this.props.article.category.color}}>{this.props.article.category.name}
        </p>
        {this.renderThumb()}
        <p className="title">
          {this.props.article.title}
        </p>
        <div className="author">
          {this.renderAvatar()}
          <i className="author-name">by {this.props.article.author.name}</i>
        </div>
        {this.renderDescription()}
      </div>
    );
  }
}

export default Article;
