import React from 'react'
import App from './App'
import ReactDOM from 'react-dom/client'

import { store } from '../app/store'

import { $ } from './utils/dom'
import { Provider } from 'react-redux'

import './index.css'

ReactDOM.createRoot($('#root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)