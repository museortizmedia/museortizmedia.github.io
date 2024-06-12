import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import App from './App.jsx'

//npm run build
// cambiar nombre de dist a build
//npm run deploy

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)