import React from "react";
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';
import "../css/Account.css";
const Login = () => {
    return(
        <>
            <Navbar />

            <div className="account">
                <div className="sign_up">
                    <h6>Welcome Back !</h6>
                    <h3>Sign Into Your Account</h3>
                    <span>Don't have an account? <Link to="../account">Sign Up</Link></span>
                    <form action="">
                         
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
                         <button type="button" className="signin out">Forgot Password</button>
                         <button type="submit">Sign In</button>
                         


                         </div>

                        
 

                          

                        
                    </form>
                </div>
            </div>

        
        </>

        
    )
};

export default Login;