import React from "react";
import Footerimg from '../../../public/Footer.png'
import styles from '../../styles/Footer.module.css'
import Logo from './/footerLogo.js'
import Links from './/Links'
import Link from "next/link";
import Image from "next/image";

function Footer (){

return(
<div className={styles.FooterContainer} id='FooterContainer'>
<div className={styles.footerLinks}>
    <div className={styles.footerLogoContainer}>
<Logo/>

    <p>glaxiclean</p>
    </div>
<ul>
    <li>Services</li>
    <li>Home</li>
    <li>About</li>
</ul>
</div>
    </div>
);
}

export default Footer;