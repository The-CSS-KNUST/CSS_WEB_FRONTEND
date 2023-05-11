import React from "react";
import "../css/Container.css";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Subbanner from "../components/Subbanner";
import First_section from "../components/First_section";
import Second_section from "../components/Second_section";
import Guidelines from "../components/Guidlines";
import Challenge from "../components/Challenge";
import Spotlight from "../components/Spotlight";
import Newsletter from "../components/Newsletter";
import Connect from "../components/Connect";
import Socials from "../components/Socials";
import Footer from '../components/Footer';
//  import MobileNavigation from "../components/Mobile_nav";

const Home = () => {
    return(
             <div className="container">

 
                    <Navbar />
                    <Subbanner />
                    <First_section />
                    <Second_section />
                    <Guidelines />
                    <Challenge />
                    <Spotlight />
                    <Newsletter />
                    <Connect />
                    <Socials />
                    <Footer />

            {/* <MobileNavigation /> */}
        

        </div>
       
    )
};

export default Home;