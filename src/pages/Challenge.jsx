import React from "react";
import Navbar from "../components/Navbar";
import Coding_gif from "../assets/coding gif.gif";
import "../css/Challenge_page.css";
const Challenge = () => {
    return(
        <>
         <Navbar />
         <div className="no_challenge">
            <img src={Coding_gif}/>
            <div className="text">
                Sorry, there are no active challenges
            </div>
         </div>

        
        </>
        
    )
};

export default Challenge;