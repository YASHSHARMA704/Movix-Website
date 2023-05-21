import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

import { store } from './store/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>    <-- react strict mode was calling the api twice because it ensures response comes earlier is similar to response comes later. and we want only one time response.

  <Provider store = {store} >
    <App />
  </Provider> ,

  // </React.StrictMode>
)
