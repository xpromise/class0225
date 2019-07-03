import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';

import App from './App';

store.subscribe(render);

render();
function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
}