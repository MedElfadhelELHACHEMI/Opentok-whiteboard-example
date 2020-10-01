import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import config from './config';

ReactDOM.render(
  <React.StrictMode>
      <App
          apiKey={config.API_KEY}
          sessionId={config.SESSION_ID}
          token={config.TOKEN}
          loadingDelegate={<div>Loading...</div>}
          opentokClientUrl="https://static.opentok.com/v2/js/opentok.min.js"
      />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
