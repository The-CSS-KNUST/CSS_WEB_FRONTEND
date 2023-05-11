import React, { useState } from 'react';
import '../css/Subbanner.css';
import { Link } from 'react-router-dom';


function Subbanner() {
  const [bannerText, setBannerText] = useState("CSS Clinic Hub happening on Saturday, 21st January. " );

  function handleClick() {
    setBannerText("New banner text");
  }

  return (
    <div className="sub_banner">
      <p className="sub_banner__text">{bannerText} <Link to="../activities">Click here for more Activities</Link></p>
     </div>
  );
}
export default Subbanner;