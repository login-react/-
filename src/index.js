import React from 'react';
import ReactDOM from 'react-dom';
import Add from './Demo/Add';
import ES6 from './ES6/ES6';
import Jg from './ES6/Jg';
import Symbol from './ES6/Symbol';
import Object1 from './Demo/Object';


import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<Basic />, document.getElementById('root'));
ReactDOM.render(<Object1 />, document.getElementById('root'));
registerServiceWorker();
