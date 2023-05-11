import React from "react";
import { Link } from 'react-router-dom';
import "../css/Second_section.css";
import "./Activity_card";
import Activity_card from "./Activity_card";

function Second_section(){
    return(
        <div className="s_s">
               <div className="header">
                   <h4>Activities</h4>
                   <Link to="../activities" className="tdn view_all">View All</Link>
                </div>
                <Activity_card />
               
        </div>
     
    );
}

export default Second_section;