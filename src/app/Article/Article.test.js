import React from 'react';
import ReactDOM from 'react-dom';
import Article from './Article';

it('renders Article without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Article />, div);
});


// Todo
it('should hide the parts depending on article tpe (highlight, minimal...)', () => {});
