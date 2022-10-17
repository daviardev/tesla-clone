import React from 'react'
import App from './App'
import ReactDOM from 'react-dom/client'

import { $ } from './utils/dom'

import './index.css'

ReactDOM.createRoot($('#root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)