import React from 'react';
import "../css/Container.css";
import Navbar from './Navbar';
import Subbanner from './Subbanner';
import First_section from './First_section';
import Second_section from './Second_section';
import Guidelines from './Guidlines';
import Challenge from './Challenge';
import Spotlight from './Spotlight';
import Newsletter from './Newsletter';
import Connect from './Connect';
import Socials from './Socials';
import Footer from './Footer';
 
 
export default function Container(){
    return (
        <html>
            <div className='container'>

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



           </div>


        </html>
        
    )
}