// import React from 'react';
import ReactDOM from 'react-dom';

//we use require when bringing in other js files
//get redux code
require('./reducers/reducer.js');

import Layout from './components/Layout.jsx';
// import Comp from './components/comp.jsx';

//where we will render our components
const app = document.getElementById('react-root');
//how to render a component
ReactDOM.render(<Layout/>, app);
// ReactDOM.render(<Comp someText="this is some text..." initialMessage="this is the intial message" />, app);
