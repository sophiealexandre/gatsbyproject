import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"


const Header = () => {
return (

<header id ="navbar" className={headerStyles.header}>
      <ul className={headerStyles.navList}>
         <li>
            <Link to="/" activeClassName={headerStyles.activeMenuItem}>
            Home
            </Link>
         </li>
         <li>
            <Link to="#services" activeClassName={headerStyles.activeMenuItem}>
            Services
            </Link>
         </li>
         <li>
            <Link to="#about" activeClassName={headerStyles.activeMenuItem}>
            About
            </Link>
         </li>
         <li>
            <Link to="#contact" activeClassName={headerStyles.activeMenuItem}>
            Contact
            </Link>
         </li>
      </ul>
</header>
)
}

if (typeof window !== `undefined`)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.backgroundColor = "black";
  } else {
    document.getElementById("navbar").style.top = "0px";
  }
}

export default Header
