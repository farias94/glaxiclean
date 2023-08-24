import React, { useState } from "react";
import Logo from './/footerLogo';
import styles from '../../../public/Navbar.module.css'
import Links from ".//Links";
import logo  from "../../../public/logo.svg";

/*const backup =  <div className= {`styles.NavbarContainer${isOpen?'Open' :'Closed'}`}  onClick={toggle}>*/


function Navbar (){
    console.log(styles)

const [isOpen, setOpen] = useState(false)

function toggle(){
    setOpen(!isOpen)
}
/*const navClassname = classNames('styles.NavbarContainer',{
    'Open':isOpen,
    'Closed':!isOpen
},'')*/

/*<div className= {{styles}`.NavbarContainer${isOpen?'Open' :'Closed'}`}  onClick={toggle}>*/

    return(

         <div className= {styles[`NavbarContainer${isOpen?'Open' :'Closed'}`]}  onClick={toggle}>

<Logo className ={styles.NavbarLogo} />
<div id ='navbarLinks '> 
<Links NavState={isOpen}/>
</div>
           


        </div>

)

}

export default Navbar