import React, { Component } from 'react';
import './ArticleList.css';
import Article from './Article.js';

class ArticleList extends Component {

  getArticlePosition = (index) => {
    switch(index){
      case 0:
        return 'highlight';
      case 1:
        return 'secondary';
      case 2:
        return 'secondary';
      default:
        return 'minimal';
    }
  }

  render() {
    if(this.props.articles){
        return (
          <div className="article-list">
            {this.props.articles.map((article, index) => {
                if(index < 3){
                  return <div className={`${this.getArticlePosition(index)}-article`} key={article.id}>
                    <Article article={article} position={this.getArticlePosition(index)}></Article>
                  </div>;
                } else {
                    return null;
                }
            })}
            <div className="divider"></div>
            {this.props.articles.map((article, index) => {
                if(index > 2){
                  return <div className={`${this.getArticlePosition(index)}-article`} key={article.id}>
                    <Article article={article} position={this.getArticlePosition(index)}></Article>
                  </div>;
                } else {
                    return null;
                }
            })}
          </div>
        );
    } else {
        return null;
    }
  }
}

export default ArticleList;


        // <div className="article highlight-article">
        //   <p className="article-category">POLITICS</p>
        //   <img className="article-image" src="/assets/no-img.png" alt="article" />
        //   <p className="article-title">
        //     Obama Offers Hopeful Vision While Noting Nation’s Fears
        //   </p>
        //   <div className="author">
        //     <img className="author-avatar" src="/assets/no-img.png" alt="author" />
        //     <i className="author-name">by Creed Bratton</i>
        //   </div>
        // </div>

        // <div className="article secondary-article">
        //   <p className="article-category">POLITICS</p>
        //   <img className="article-image" src="/assets/no-img.png" alt="article" />
        //   <p className="article-title">
        //     Didi Kuaidi, The Company Beating Uber In China, Opens Its API To Third Party Apps
        //   </p>
        //   <div className="author">
        //     <img className="author-avatar" src="/assets/no-img.png" alt="author" />
        //     <i className="author-name">by Creed Bratton</i>
        //   </div>
        //   <div className="article-desc">
        //     One day after Uber updated its API to add ‘content experiences’ for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.
        //   </div>
        // </div>

        // <div className="article tertiary-article">
        //   <p className="article-category">SCIENCE</p>
        //   <img className="article-image" src="/assets/no-img.png" alt="article" />
        //   <p className="article-title">
        //     Obama Offers Hopeful Vision While Noting Nation’s Fears
        //   </p>
        //   <div className="author">
        //     <img className="author-avatar" src="/assets/no-img.png" alt="author" />
        //     <i className="author-name">by Creed Bratton</i>
        //   </div>
        // </div>

        // <div className="divider"></div>

        // <div className="article minimal-article minimal-article-1">
        //   <p className="article-category">SCIENCE</p>
        //   <p className="article-title">
        //     Obama Offers Hopeful Vision While Noting Nation’s Fears
        //   </p>
        //   <div className="author">
        //     <img className="author-avatar" src="/assets/no-img.png" alt="author" />
        //     <i className="author-name">by Creed Bratton</i>
        //   </div>
        //   <div className="article-desc">
        //     One day after Uber updated its API to add ‘content experiences’ for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.
        //   </div>
        // </div>

        // <div className="article minimal-article minimal-article-2">
        //   <p className="article-category">SCIENCE</p>
        //   <p className="article-title">
        //     Obama Offers Hopeful Vision While Noting Nation’s Fears
        //   </p>
        //   <div className="author">
        //     <img className="author-avatar" src="/assets/no-img.png" alt="author" />
        //     <i className="author-name">by Creed Bratton</i>
        //   </div>
        //   <div className="article-desc">
        //     One day after Uber updated its API to add ‘content experiences’ for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.
        //   </div>
        // </div>

        // <div className="article minimal-article minimal-article-3">
        //   <p className="article-category">SCIENCE</p>
        //   <p className="article-title">
        //     Obama Offers Hopeful Vision While Noting Nation’s Fears
        //   </p>
        //   <div className="author">
        //     <img className="author-avatar" src="/assets/no-img.png" alt="author" />
        //     <i className="author-name">by Creed Bratton</i>
        //   </div>
        //   <div className="article-desc">
        //     One day after Uber updated its API to add ‘content experiences’ for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.
        //   </div>
        //</div>