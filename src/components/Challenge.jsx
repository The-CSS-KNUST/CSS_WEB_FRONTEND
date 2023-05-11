import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Challenge.css"

const Challenge = () => {
  return (
    <div className="challenge">
      <div className="left-column">
        <div className="circle-container">
          <div className="circle bg blue"></div>
           
        </div>
        <div className="circle-container">
           <div className="circle bg red"></div>
         </div>
        <div className="circle-container">
          
          <div className="circle bg green"></div>
        </div>
      </div>
      <div className="middle-column">
        <h1>Join 1,000+ society members 
            <React.Fragment>
                <br /> 
            </React.Fragment> 
            in solving challenges
        </h1>
        <h3>Sharpen your skills, Standout among your colleagues</h3>
        <Link to="../challenge" className='challenge-button tdn'>JOIN THE CHALLENGE</Link>
       </div>
      <div className="right-column">
        <div className="circle-container">
          <div className="circle bg green gr"></div>
          
        </div>
        <div className="circle-container">
           <div className="circle bg red rr"></div>
         </div>
        <div className="circle-container">
          
          <div className="circle bg blue br"></div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
