import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/Home.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Testimonial from './components/Testimonial.jsx'
import Blog from './components/Blog.jsx'
import Chat from './components/Chat.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
    <Services/>
    <Projects/>
    <Testimonial/>
    <Blog/>
    <Chat/>
    <Footer/>
  </React.StrictMode>,
)
