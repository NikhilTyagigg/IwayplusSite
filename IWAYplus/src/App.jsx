import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  return (
    <>
      <div className='bg-slate-500'>
        <Header activeLink={activeLink} setActiveLink={setActiveLink} />
      </div>
      <Outlet />
      <div>
        <Footer activeLink={activeLink} setActiveLink={setActiveLink} />
      </div>
    </>
  );
}

export default App;
