import styles from "./BarreNavigation.module.css"
import MyButton from "../ButtonFolder/MyButton.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import BurgerButton from "../ButtonFolder/BurgerButton.jsx";
import Xbutton from "../ButtonFolder/X-button.jsx";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";


function BarreNavigation({link1,link2,link3,link4}){
        const logo={nom:"Sana ",prenom:"tahirou"}
        const[open,setOpen]=useState(false)
        const[click,setClick]=useState(false)
        const handleClick=()=>setClick(true)
     
        useEffect(()=>{
            if(open){
                const scrollY=window.scrollY;//get the document scrollY position
                document.body.style.position="fixed" // fixed the document position which avoid scrolling
                document.body.style.top=`-${scrollY}px`; //set the document top default position to scrollY
                document.body.style.width="100%"; // allow to not break the document layout
                document.body.dataset.scrollY=scrollY; // set the scrollY property to the dataset object
            }
            else{
                const scrollY=document.body.dataset.scrollY || "0"
                document.body.style.position="" //renitialize document style
                document.body.style.top="" // same like previous
                document.body.style.width="" // same like previous
                window.scrollTo(0,parseInt(scrollY,10)) // scroolTo(x,y) parseInt("string",base)
               }
            },[open])
    return(
        <header className={styles.header}>
    <nav className={styles.Box}>
            <Link to="/" className={styles.logo}>
                <span className={styles.logoNom}>{logo.nom}</span>
                <span className={styles.logoPrenom}>{ logo.prenom}</span>
            </Link>
            <div className={styles.dropdownBox}>
            <button 
            onClick={()=>setOpen(!open)}
            className={`${styles.dropdownButton} ${open? styles.close:""}`}
            ><BurgerButton/>
            </button>
           <ul className={styles.linksBox}>
               <li><NavLink to="/"  className={({isActive})=>`${styles.navlink} ${isActive? styles.Clicked : ''}`}>{link1}</NavLink></li>
               <li><NavLink to="/About_Me"className={({isActive})=>`${styles.navlink} ${isActive? styles.Clicked : ''}`} >{link2}</NavLink></li>
               <li><NavLink to="/News" className={({isActive})=>`${styles.navlink} ${isActive? styles.Clicked : ''}`} >{link3}</NavLink></li>
               <li><NavLink to="/skills" className={({isActive})=>`${styles.navlink} ${isActive? styles.Clicked : ''}`}>{link4}</NavLink></li>
              <MyButton text="contact me"/>
            </ul>
            </div>
            <ul className={`${styles.sidebar} ${open ? styles.open : ""}`} >
                <button 
                onClick={()=>setOpen(!open)} 
                className={styles.closeButton} 
                > <Xbutton/>
                </button>
               <li><NavLink to="/" className={({isActive})=>`${styles.sidelink} ${isActive? styles.Clicked : ''}`} >{link1}</NavLink></li>
               <li><NavLink to="/About_Me" className={({isActive})=>`${styles.sidelink} ${isActive? styles.Clicked : ''}`} >{link2}</NavLink></li>
               <li><NavLink to="/News" className={({isActive})=>`${styles.sidelink} ${isActive? styles.Clicked : ''}`} >{link3}</NavLink></li>
               <li><NavLink to="/skills" className={({isActive})=>`${styles.sidelink} ${isActive? styles.Clicked : ''}`} >{link4}</NavLink></li>
            </ul>
            </nav>
        </header>
        
    )
}

export default BarreNavigation;
