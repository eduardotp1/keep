import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
