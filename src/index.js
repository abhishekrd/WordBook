import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import * as serviceWorkerRegistration from './serviceWorkerRegistration.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

serviceWorkerRegistration.register();