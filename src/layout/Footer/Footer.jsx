



import React from "react";
import { Link } from "react-router-dom"; // تأكد من إضافة هذا السطر
import "./Footer.css"

export default function FooterComp() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-info">
                    <h3>Furniro</h3>
                    <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
                </div>
                <div className="footer-links">
                    <h4>Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-help">
                    <h4>Help</h4>
                    <ul>
                        <li>Payment Options</li>
                        <li>Returns</li>
                        <li>Privacy Policies</li>
                    </ul>
                </div>
                <div className="footer-newsletter">
                    <h4>Newsletter</h4>
                    <input type="email" placeholder="Enter Your Email Address" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="footer-bottom">
                <p>2023 Furniro. All rights reserved</p>
            </div>
        </footer>
    );
}

