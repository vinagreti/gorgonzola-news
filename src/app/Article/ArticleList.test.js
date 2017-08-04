import React from 'react';
import ReactDOM from 'react-dom';
import ArticleList from './ArticleList';

it('renders ArticleList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ArticleList />, div);
});
