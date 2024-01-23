import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
const Header = () => {
    const [shownav, setShownav] = useState(false);

    useEffect(() => {
      const sidebar = document.querySelector('.sidenav');
      if (sidebar) {
        sidebar.style.left = shownav ? '0' : '-100%';
        sidebar.style.transition = "all 1s"; // Corrected line
      }
    }, [shownav]);
  return (
    <div className="head">
      <header>
        <GiHamburgerMenu style={{color:"#fff"}} onClick={() => setShownav(!shownav)} />
      </header>

      {shownav && <Sidebar/>}
    </div>
  )
}

export default Header
