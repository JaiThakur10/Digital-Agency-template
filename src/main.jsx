import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/Home.jsx'
import Services from './components/Services.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
    <Services/>
  </React.StrictMode>,
)
