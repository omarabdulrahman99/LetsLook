import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



import {ContextOneProvider} from "./ContextOne";




//redux is a mess, let's use context.



ReactDOM.render(

  <ContextOneProvider>	
	<App />
  </ContextOneProvider>,
	document.getElementById('root')

	);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
