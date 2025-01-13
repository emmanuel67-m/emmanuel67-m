import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-black text-2xl font-bold">ShopSphere</a>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-black">Home</a></li>
          <li><a href="/products" className="text-black">Products</a></li>
          <li><a href="/About" className="text-black">About Us</a></li>
          <li className="relative">
            {/* Categories Button */}
            <button 
              onClick={toggleDropdown}
              className="text-black" // Minimal styling for Categories
            >
              Categories
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200">
                <ul className="space-y-2">
                  <li>
                    <a href="/Fashion" className="block px-4 py-2 text-black">Fashion</a>
                  </li>
                  <li>
                    <a href="/electronics" className="block px-4 py-2 text-black">Electronics</a>
                  </li>
                  <li>
                    <a href="/Gaming" className="block px-4 py-2 text-black">Gaming</a>
                  </li>
                  <li>
                    <a href="/products" className="block px-4 py-2 text-black">Others</a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            {/* Account Button with Styles */}
            <a 
              href="/Login" 
              className="flex items-center text-black border border-black py-2 px-4 rounded-md hover:bg-black hover:text-white transition-all"
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              <span>Account</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
