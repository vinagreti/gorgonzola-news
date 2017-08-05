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
    if(this.props.articles && this.props.articles.length > 0){
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
      return(
        <p>Nothing to show for this category {this.props.category}.</p>
      )
    }
  }
}

export default ArticleList;