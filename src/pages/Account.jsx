import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import "../css/Account.css";
const Account = () => {
    return(
        <div className="acccount_container">
            <Navbar />
            <div className="account">
                <div className="sign_up">
                    <h6>Sign Up For Free</h6>
                    <h3>Create A New Account</h3>
                    <span>Already A Member? <Link to="../Login">Log in</Link></span>
                    <form action="">
                        <div className="duo">
                            <div className="input">
                                <div className="label">First Name</div>
                                <input type="text" />
                            </div>
                            <div className="input">
                                <div className="label">Last Name</div>
                                <input type="text" />
                            </div>
                         </div>
                         <div className="duo">
                         <div className="input">
                                <div className="label">Class</div>
                                <select name="" id="">
                                    <option value="">CS 1</option>
                                    <option value="">CS 2</option>
                                    <option value="">CS 3</option>
                                    <option value="">CS 4</option>

                                </select>
                            </div>
                             
                            <div className="input">
                                <div className="label">Age</div>
                                <input type="number" />
                            </div>
                         </div>
                         <div className="duo fw">
                         <div className="input">
                                <div className="label">Email</div>
                                <input type="email" />
                            </div>
                           
                            
                             
                         </div>
                         <div className="duo fw">
                         <div className="input">
                                <div className="label">Password</div>
                                <input type="password" />
                            </div>
                           
                            
                             
                         </div>
                         
                         <div className="submit">
                         <button type="button" className="signin">Forgot Password</button>
                         <button type="submit">Create Account</button>
                         

                         </div>

                        
 

                          

                        
                    </form>
                </div>
            </div>
        </div>

        
    )
};

export default Account;