import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <>
      {/* Top Section */}
      <div className="flex flex-col items-center justify-center bg-gray-900 w-full py-8 px-4 gap-6 md:h-48 shadow-inner border-t border-gray-800">
        
        
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              href: "https://www.instagram.com/_prabonly/", 
              src: "https://img.icons8.com/?size=96&id=Xy10Jcu1L2Su&format=png",
              alt: "Instagram",
            },
            {
              href: "https://github.com/pratikchaubey1/RouterOnshopping", 
              src: "https://imgs.search.brave.com/vLH5j1NhqCKKJ7DO3J5hhVgbPO2qxXhfgOFH30acMsI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3ZncmVwby5jb20v/c2hvdy8zMDM2MTUv/Z2l0aHViLWljb24t/MS1sb2dvLnN2Zw",
              alt: "GitHub",
            },
          ].map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="h-10 w-10 rounded-full bg-white p-1 object-cover shadow-md"
              />
            </a>
          ))}
        </div>

        
        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          {[
            { to: '/', label: 'Home' },
            { to: '/About', label: 'About' },
            { to: '/Contact', label: 'Contact' },
          ].map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      
      <div className="w-full bg-black text-center py-4 text-gray-500 text-sm">
        © 2025 | Designed by{' '}
        <span className="text-purple-500 font-semibold tracking-wide">Prab</span>
      </div>
    </>
  );
}

export default Footer;
