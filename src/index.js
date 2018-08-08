import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "mobx-react";
import UiState from './store/store'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <Provider UiState={UiState}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
