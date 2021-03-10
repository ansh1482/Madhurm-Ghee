import React from 'react';
import './footbar.css';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';

const FootBar = () => (
    <div className='footbar'>
        <a href='https://www.facebook.com/madhurm.india' target='_blank'><FaFacebook className='icon facebook' /></a>
        <a href='https://www.instagram.com/madhurm_india/' target='_blank'><FaInstagram className='icon instagram' /></a>
        <a href='https://www.youtube.com/watch?v=7HKtgPTU8ys' target='_blank'><FaYoutube className='icon youtube' /></a>
    </div>
);

export default FootBar;