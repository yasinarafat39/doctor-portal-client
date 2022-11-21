import React from 'react';
import { Link } from 'react-router-dom';
import footerBg from '../../../assets/images/footer.png';



const Footer = () => {
    return (
        <div style={{ backgroundImage: `url(${footerBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <footer className="lg:px-24 px-6 py-[74px] footer text-base-content" >
                <div>
                    <h3 className="footer-title">Services</h3>
                    <Link className="link link-hover"><p>Emergency Checkup</p></Link>
                    <Link className="link link-hover"><p>Monthly Checkup</p></Link>
                    <Link className="link link-hover"><p>Weekly Checkup</p></Link>
                    <Link className="link link-hover"><p>Deep Checkup</p></Link>
                </div>
                <div>
                    <h3 className="footer-title"><p>Oral Health</p></h3>
                    <Link className="link link-hover"><p>Fluoride Treatment</p></Link>
                    <Link className="link link-hover"><p>Cavity Filling</p></Link>
                    <Link className="link link-hover"><p>Teath Whitening</p></Link>
                </div>
                <div>
                    <h3 className="footer-title"><p>Our Address</p></h3>
                    <Link className="link link-hover"><p>New York - 101010 Hudson</p></Link>
                </div>
            </footer>
            <div>
                <p className='text-center py-8'>Copyright 2022 All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;