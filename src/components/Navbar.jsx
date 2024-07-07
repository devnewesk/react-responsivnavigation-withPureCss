import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const [open, setOpen] = useState(window.innerWidth >= 1024);
  const toggleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(true);
        // } else {
        //   setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <h1 className="logo">NEWESK CORP</h1>
      {open && (
        <>
          <ul className="menu">
            <li>
              <a href="http://">Home</a>
            </li>
            <li>
              <a href="http://">Gallery</a>
            </li>
            <li>
              <a href="http://">About Us</a>
            </li>
            <li>
              <a href="http://">Contact</a>
            </li>
          </ul>
          <input
            type="text"
            className="search-input"
            placeholder="type something to search"
          />
        </>
      )}
      <div>
        {open ? (
          <IoCloseSharp onClick={toggleOpen} size={32} className="open-icon" />
        ) : (
          <GiHamburgerMenu
            onClick={toggleOpen}
            size={32}
            className="open-icon"
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
