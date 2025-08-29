
import React, { useContext, useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Ecart } from "../Context/Context";

function Navbar() {
  const {
    search,
    setsearch,
    cart,
    showSearch,
    handleSearchToggle,
    dropdownOpen,
    setDropdownOpen,
  } = useContext(Ecart);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted:", search);
    handleSearchToggle();
  };

  const iconHoverClass =
    "relative hover:text-indigo-600 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-indigo-600 after:left-0 after:bottom-[-4px] hover:after:w-full after:transition-all after:duration-300";

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold text-gray-800 tracking-wide hover:scale-105 transition duration-200"
          >
            <span className="text-indigo-600">Prab/</span>
            <span className="text-gray-500 font-light">Shop</span>
          </NavLink>

          {/* Mobile Icons */}
          <div className="flex items-center gap-4 md:hidden">
            <NavLink
              to="/Cart"
              className={`relative text-gray-600 ${iconHoverClass}`}
            >
              <FiShoppingBag size={28} />
              {cart?.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </NavLink>
            <button
              className="text-3xl text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div
            className={`absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent px-4 md:px-0 py-4 md:py-0 shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
              menuOpen ? "block" : "hidden md:flex"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 w-full">
              {/* Links */}
              <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                {[
                  { to: "/About", label: "About Us" },
                  { to: "/contact", label: "Contact" },
                ].map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `font-medium text-[17px] transition hover:text-indigo-600 ${
                          isActive
                            ? "text-indigo-500 font-bold"
                            : "text-gray-600"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Search Icon */}
              <button
                onClick={handleSearchToggle}
                className={`px-4 py-2 text-gray-500 ${iconHoverClass}`}
              >
                <IoSearchOutline size={28} />
              </button>

              {/* Animated Search Box */}
              <AnimatePresence>
                {showSearch && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-4 mt-55 w-90 bg-white rounded-md shadow-lg border border-gray-100 p-10"
                  >
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSearchSubmit();
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setsearch(e.target.value)}
                        className="w-auto px-10 py-3 text-gray-800 placeholder-gray-400 
                        border border-gray-300 rounded-xl shadow-inner 
                        hover:border-indigo-400 hover:shadow-md
                        focus:ring-2 focus:ring-indigo-500 
                        focus:border-indigo-500 outline-none 
                        transition-all duration-300 ease-in-out"
                      />
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Cart Icon */}
              <NavLink
                to="/Cart"
                onClick={() => setMenuOpen(false)}
                className={`relative hidden md:block text-gray-600 ${iconHoverClass}`}
              >
                <FiShoppingBag size={28} />
                {cart?.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cart.length}
                  </span>
                )}
              </NavLink>

              {/* Profile Dropdown */}
              <div className="relative hidden md:block">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`text-gray-600 ${iconHoverClass}`}
                >
                  <CgProfile size={28} />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-100 p-2"
                    >
                      <ul className="flex flex-col gap-2">
                        <li>
                          <NavLink
                            to="/login"
                            onClick={() => setDropdownOpen(false)}
                            className="block w-full text-center px-4 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-md font-medium"
                          >
                            Login
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/signup"
                            onClick={() => setDropdownOpen(false)}
                            className="block w-full text-center px-4 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-md font-medium"
                          >
                            Signup
                          </NavLink>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
