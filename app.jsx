//This is going to be the entry point of the app. Where we link all our components with the index.html

import React from 'react';
import ReactDom from 'react-dom';
import Main from './components/main';

ReactDom.render(<Main/>, document.getElementById('main'));
