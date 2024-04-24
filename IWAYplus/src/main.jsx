import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider  } from 'react-router-dom'
import About from './components/About/About.jsx'
import Demo from './components/Demo/Demo.jsx'
import Contact from './components/Contact/Contact.jsx'
import Jobs from './components/Jobs/Jobs.jsx'
import Team from './components/Team/Team.jsx'
import Work from './components/Work/Work.jsx'
import Pricing from './components/Pricing/Pricing.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='about' element={<About/>}/>
      <Route path='demo' element={<Demo/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='job' element={<Jobs/>}/>
      <Route path='team' element={<Team/>}/>
      <Route path='work' element={<Work/>}/>
      <Route path='price' element={<Pricing/>}/>


    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
