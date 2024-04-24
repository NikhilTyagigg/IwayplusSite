import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faInr, faSquareCaretRight, faTh, faUser } from '@fortawesome/free-solid-svg-icons';
import logowhite from '../../assets/logowhite.png';

// Header component

const Header = ({ activeLink, setActiveLink }) => {
  return (
    <div className='bg-slate-100 px-4 md:px-7 py-4 md:py-2 lg:py-3 flex flex-col md:flex-row items-center justify-between fixed w-full top-0 z-50'>
      <NavLink to='/about'>
        <img src={logowhite} alt='' className='w-32 h-auto cursor-pointer mix-blend-multiply mb-4 md:mb-0' />
      </NavLink>
      <ul className='md:flex flex-left justify-center space-x-8'>
        <li>
          <NavLink 
            to='/about' 
            className={`text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out block ${activeLink === '/about' ? 'text-yellow-500' : ''}`}
            activeClassName="text-yellow-500"
            onClick={() => setActiveLink('/about')}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/team' 
            className={`text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out block ${activeLink === '/team' ? 'text-yellow-500' : ''}`}
            activeClassName="text-yellow-500"
            onClick={() => setActiveLink('/team')}
          >
            <FontAwesomeIcon icon={faUser} className='mr-2 h-4'/>
            TEAM
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/work' 
            className={`text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out block ${activeLink === '/work' ? 'text-yellow-500' : ''}`}
            activeClassName="text-yellow-500"
            onClick={() => setActiveLink('/work')}
          >
            <FontAwesomeIcon icon={faTh} className='mr-2 h-4'/>
            WORK
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/demo' 
            className={`text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out block ${activeLink === '/demo' ? 'text-yellow-500' : ''}`}
            activeClassName="text-yellow-500"
            onClick={() => setActiveLink('/demo')}
          >
            <FontAwesomeIcon icon={faSquareCaretRight} className='mr-2 h-4'/>
            DEMO
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/price' 
            className={`text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out block ${activeLink === '/price' ? 'text-yellow-500' : ''}`}
            activeClassName="text-yellow-500"
            onClick={() => setActiveLink('/price')}
          >
            <FontAwesomeIcon icon={faInr} className='mr-2 h-4'/>
            PRICING
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/job' 
            className={`text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out block ${activeLink === '/job' ? 'text-yellow-500' : ''}`}
            activeClassName="text-yellow-500"
            onClick={() => setActiveLink('/job')}
          >
            <FontAwesomeIcon icon={faBriefcase} className='mr-2 h-4'/>
            JOBS
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/contact' 
            className={`text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out block ${activeLink === '/contact' ? 'text-yellow-500' : ''}`}
            activeClassName="text-yellow-500"
            onClick={() => setActiveLink('/contact')}
          >
            <FontAwesomeIcon icon={faEnvelope} className='mr-2 h-4'/>
            CONTACT
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
