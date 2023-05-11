
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/First_section.css';

function First_section() {
  return (
    <div className="f_s">
      <div className="f_s_row">
        <div className="f_s_col">
          <h1 className="f_s_title">Computer Science Soceity</h1>
          <p className="f_s_subtext">Go the distance bush leage the gloves are off gamble resposibly fast and furious daisy-cutter claret on the field</p>
           <Link to="../account" className="f_s_button tdn"> JOIN OUR COMMUNITY</Link>
         </div>
      </div>
      <div className="f_s_row">
        <div className="f_s_col grid">
          <div className="f_s_item">
            <h2 className="f_s_item-title">Learn </h2>
            <p className="f_s_item-subtext">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia illum minima consectetur molestias impedit ex dolores aut quod corrupti eaque!</p>
          </div>
          <div className="f_s_item">
            <h2 className="f_s_item-title">Connect </h2>
            <p className="f_s_item-subtext">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia illum minima consectetur molestias impedit ex dolores aut quod corrupti eaque!</p>
          </div>
          <div className="f_s_item">
            <h2 className="f_s_item-title">Grow</h2>
            <p className="f_s_item-subtext">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia illum minima consectetur molestias impedit ex dolores aut quod corrupti eaque!</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default First_section;