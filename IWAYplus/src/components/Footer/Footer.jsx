import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Footer({ activeLink, setActiveLink }) {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Company Name and Logo */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <p className="text-lg ml-3">IWAYPLUS</p>
          <br></br>
          <p>Phone: 011 2659 6080</p>

          {/* Add your company logo here if needed */}
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <p className='text-blue-200'>Connect us with : </p>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faDownload} />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0 mr-3">
          {/* Use NavLink instead of Link */}
          <NavLink to="/about" className={`hover:text-yellow-500 transition duration-300 ease-in-out ${activeLink === '/about' ? 'text-yellow-500' : ''}`} activeClassName="text-yellow-500" onClick={() => setActiveLink('/about')}>About</NavLink>
          <NavLink to="/contact" className={`hover:text-yellow-500 transition duration-300 ease-in-out ${activeLink === '/contact' ? 'text-yellow-500' : ''}`} activeClassName="text-yellow-500" onClick={() => setActiveLink('/contact')}>Contact</NavLink>
          <NavLink to="/work" className={`hover:text-yellow-500 transition duration-300 ease-in-out ${activeLink === '/work' ? 'text-yellow-500' : ''}`} activeClassName="text-yellow-500" onClick={() => setActiveLink('/work')}>Work</NavLink>
          <NavLink to="/demo" className={`hover:text-yellow-500 transition duration-300 ease-in-out ${activeLink === '/demo' ? 'text-yellow-500' : ''}`} activeClassName="text-yellow-500" onClick={() => setActiveLink('/demo')}>Demo</NavLink>
        </div>
      </div>
    </footer>
  );
}
