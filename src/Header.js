import React, {useState} from 'react'
import "./Header.css";
import Logo from "./logo.png";
import {Link} from "react-router-dom";
import SearchIcon from "./icon.png";
import Modal from './Modal';





function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className = "header">
            <div className = "olx_logo">
                <Link>
                        <img 
                            className = "header_logo" 
                            src = {Logo}
                            alt="olx logo" 
                        />
                </Link>
            </div>
            <div className = "loc_search">
                <input type = "text" placeholder = "Pakistan" className = "header_locbar"/>
            </div>    
            <div className = "header_search">
                
                
                <input type = "text" placeholder ="Find Cars, Mobile Phones and more..." 
                    className = "header_searchbar"
                />
                <Link>
                    <img 
                        className = "header_iconsearch"
                        src = {SearchIcon}
                        alt = ""
                    />
                </Link>
            </div>
            <div className="btns">
                <div className = "login">
                    <h4>Login</h4>
                    
                </div>
                <div className = "sell_btn">
                    <button className = "sell" onClick={() =>setIsOpen(true)}><strong>SELL</strong></button>
                    <Modal open = {isOpen} onClose = {() => setIsOpen(false)} className ="login_popup">
                        <div className = "authpopup">
                            <div className  ="phone auth">
                                <button>Continue with phone</button>
                            </div>
                            <div className = "fbauth">
                                <button>Continue with facebook</button>
                            </div>
                            <div className = "googleauth">
                                 <button>Continue with google</button>
                            </div>   
                            <div className = "emailauth">
                                <button>Continue with email</button>
                            </div>
                            <div>
                                <p>We won't share your personal details with anyone</p>
                            </div>
                            <div>
                                <span>If you continue, you are accepting </span><span>OLX Terms and Conditions<br /> and Privacy Policy</span>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
           



        </div>
    );
}

export default Header

