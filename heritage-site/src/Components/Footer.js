import React from "react";
import './Footer.css';
import Illustration from '../Images/illustration-1.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkIcon from '@mui/icons-material/Link';



const Footer = ()=>{

    return(
        <section className="footer-section">
            
            <div className="footer-container">

                <div className="footer-content-container">

                    <div className="image-container">
                        
                        <div className="image-content">
                            <img src={Illustration} alt="Illustration" />
                        </div>

                    </div>


                    <div className="footer-content">

                        <div className="top-container">

                            <div className="top-content">

                                <div className="qlink-container">

                                    <div className="qlink-content">

                                        <div className="qlink-title">
                                            <h3>Quick Links</h3>
                                        </div>

                                        <div className="qlink-item">

                                            <ul>
                                                <li>
                                                    <a href="1#">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="1#">Contact Us</a>
                                                </li>
                                                <li>
                                                    <a href="1#">FAQs</a>
                                                </li>
                                                <li>
                                                    <a href="1#">Heritage Sites</a>
                                                </li>
                                            </ul>

                                        </div>

                                    </div>

                                </div>

                                <div className="qlink-container">

                                    <div className="qlink-content">

                                        <div className="qlink-title">
                                            <h3>Places</h3>
                                        </div>

                                        <div className="qlink-item">

                                            <ul>
                                                <li>
                                                    <a href="1#"> Taj Mahal</a>
                                                </li>
                                                <li>
                                                    <a href="1#"> Rani Ki Vav</a>
                                                </li>
                                                <li>
                                                    <a href="1#"> Brindavan</a>
                                                </li>
                                                <li>
                                                    <a href="1#"> Hawai Mahal</a>
                                                </li>
                                                <li>
                                                    <a href="1#"> Qutub Minar</a>
                                                </li>
                                                <li>
                                                    <a href="1#"> Red Fort</a>
                                                </li>
                                            </ul>

                                            <div className="qlink-more">
                                                <a href="1#" >
                                                    <button>more</button>
                                                </a>
                                            </div>

                                        </div>

                                        

                                    </div>

                                </div>

                                <div className="qlink-container">

                                    <div className="qlink-content">

                                        <div className="qlink-title">
                                            <h3>Offers</h3>
                                        </div>

                                        <div className="qlink-item">

                                            <ul>
                                                <li>
                                                    <a href="1#"> Combo Pack Mini</a>
                                                </li>
                                                <li>
                                                    <a href="1#"> Combo Pack Max</a>
                                                </li>
                                                <li>
                                                    <a href="1#"> Family Pack Mini</a>
                                                </li>
                                                <li>
                                                    <a href="1#"> Family Pack Max</a>
                                                </li>
                                                <li>
                                                    <a href="1#"> Family Pack Jumbo</a>
                                                </li>
                                            </ul>

                                            <div className="qlink-more">
                                                <a href="1#" >
                                                    <button>more</button>
                                                </a>
                                            </div>

                                        </div>

                                        

                                    </div>

                                </div>                        

                            </div>

                        </div>

                        <div className="middle-container">

                            <div className="middle-content">

                                <div className="icon-container">

                                    <a href="1#" className="icon-conten">
                                        <FacebookIcon className="icon facebook-icon" />
                                    </a>

                                    <a href="1#" className="icon-content">
                                        <InstagramIcon className="icon insta-icon" />
                                    </a>

                                    <a href="1#" className="icon-content">
                                        <TwitterIcon className="icon twitter-icon" />
                                    </a>

                                    <a href="1#" className="icon-content">
                                        <LinkedInIcon className="icon linkedin-icon" />
                                    </a>

                                    <a href="1#" className="icon-content">
                                        <YouTubeIcon className="icon youtube-icon" />
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="bottom-container">

                    <div className="bottom-content">

                        <div className="copyright-container">

                            <div className="copyright-content">

                                <p>All right reserved to <span>Site Name</span></p>
                                <p>Copyright @2023</p>

                            </div>

                        </div>

                        <div className="company-name">
                            <p>Crafted by team <span>Kodo Shinobi</span></p>

                        </div>

                    </div>

                        </div>

            </div>

        </section>
    );

}

export default Footer;