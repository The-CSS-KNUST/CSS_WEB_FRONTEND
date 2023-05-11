import React from "react";
import Navbar from "../components/Navbar";
import Executive_card from "../components/Executives/Executive_card";
import "../css/Container.css";
const Executives = () => {
    return(
        <div className="container">
            <Navbar />
            <Executive_card />
        

        </div>
        
    )
};

export default Executives;