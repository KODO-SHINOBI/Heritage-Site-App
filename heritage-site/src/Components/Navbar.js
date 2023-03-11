import React from "react";
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import FeedIcon from '@mui/icons-material/Feed';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LoginIcon from '@mui/icons-material/Login';

const Navbar = () => {

    return(
        <div className="navbar-container">

            <div className="navbar-content">
                <div className="logo-container">
                    <h1>L<span>og</span>o</h1>
                </div>

                <div className="search-box-container">
                    <h5>Search Places</h5>
                    <div className="search-box-content">
                        <input id="search-input" type="text" className="search-input" placeholder="Varanasi..." />
                        <SearchIcon className="search-icon" />
                    </div>
                </div>

                <div className="items-container">
                    <ul>
                        <li>
                            <a href="home.html">
                                <div className="items-content">
                                    <HomeIcon className="navbar-icon" />
                                    <h5>Home</h5>
                                    <span></span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="about.html">
                                <div className="items-content">
                                    <FeedIcon className="navbar-icon" />
                                    <h5>About Us</h5>
                                    <span></span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="contact.html">
                                <div className="items-content">
                                    <ContactsIcon className="navbar-icon" />
                                    <h5>Contact Us</h5>
                                    <span></span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="places.html">
                                <div className="items-content">
                                    <StorefrontIcon className="navbar-icon" />
                                    <h5>Places</h5>
                                    <span></span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="login-container">
                    <a href="login.html">
                        <div className="login-content">
                            <LoginIcon className="navbar-icon" />
                            <h5>Login</h5>
                            <span></span>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    );

};

export default Navbar;