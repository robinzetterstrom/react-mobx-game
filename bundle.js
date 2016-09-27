import React from 'react';
import ReactDOM from 'react-dom';
import store from './components/AppStore';
import GameObject from './components/App';

ReactDOM.render(<GameObject store={store} />, document.getElementById('app'));
