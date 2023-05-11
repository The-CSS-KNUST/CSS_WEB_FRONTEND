import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/MobileNavigation.css';

function Mobile_nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth < 700);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    toggle_items('.toggle-button');
  };

  function toggle_items(item_name){
    document.querySelector(item_name).classList.toggle("active");
    
  }

  return (
    <>
     <div className="toggle-button" onClick={handleToggle}>
           <div className='sp sp1'></div>
           <div className='sp sp2'></div>
           <div className='sp sp3'></div>
     </div>
     <div className={`mobile-navigation ${isOpen ? '' : 'open'}`}>
      <div className="mobile-navigation-header">
        {/* <button className="toggle-button" onClick={handleToggle}>
             <i className="fa-solid fa-list-radio menu_icon"></i>
         </button> */}
         <div className="toggle-button active" onClick={handleToggle}>
              
         </div>
        {/* <div className="profile">
          <img src="profile-image.jpg" alt="Profile" />
          <span>John Doe</span>
        </div> */}
      </div>
      <nav className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/challenge">Challenge</Link>
        <Link to="/executives">Executives</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/account">Account</Link>
      </nav>
    </div>
    </>
    
  );
}

export default Mobile_nav;
