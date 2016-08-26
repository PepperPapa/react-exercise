import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';

var array = [
    "ROY",
    "https://github.com/PepperPapa"
];
ReactDOM.render(<App name={array[0]} link={array[1]} />, document.getElementById('app'));
