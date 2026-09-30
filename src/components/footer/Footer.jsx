import styles from './footer.module.css'
import FacebookIcon from '../social Media Icons/Facebook';
import LinkdinIcon from '../social Media Icons/linkdin';
import GithubIcon from '../social Media Icons/Github';
import { NavLink } from 'react-router-dom';
function Footer({link1,link4,link3,link2,logo}){
    return(
        <footer className=''>
      <div className={styles.footerBox}>
            <div className={styles.logoBox}>
                <h1 className={styles.logo}>
                    <span className={styles.logoSirname}>{logo.sirname} </span>
                    <span className={styles.logoFirstname}>{logo.firstname}</span>
                </h1>
                <p className={styles.logoText}>
                    young telecom engineering student who desire to make his path in
                     the world of telecom and computer science follow my carrer with 
                     my portfolio and share with me your feedbacks. thanks for all 😉
                </p>
            </div>
            <div className={styles.linksBox}>
                <p className={styles.linksBoxTitles}>navigation</p>
                <ul className={styles.linkslist}>
               <li><NavLink to="/"  className={({isActive})=>`${styles.navlink} ${isActive? styles.Clicked : ''}`}>{link1}</NavLink></li>
               <li><NavLink to="/About_Me"className={({isActive})=>`${styles.navlink} ${isActive? styles.Clicked : ''}`} >{link2}</NavLink></li>
               <li><NavLink to="/News" className={({isActive})=>`${styles.navlink} ${isActive? styles.Clicked : ''}`} >{link3}</NavLink></li>
               <li><NavLink to="/skills" className={({isActive})=>`${styles.navlink} ${isActive? styles.Clicked : ''}`}>{link4}</NavLink></li>
            </ul>
            </div>
            <div className={styles.IconsBox}>
                <p className={styles.linksBoxTitles}>social medias</p>
                <ul>
                   <li><a target='_blank' href="https://www.facebook.com/Tahirou Sana" className={styles.iconStyle}><FacebookIcon styles={{size:120}}/></a></li>
                   <li><a target='_blank' href="https://www.linkedin.com/in/Tahirou Sana" className={styles.iconStyle}><LinkdinIcon styles={{size:50}} /></a></li> 
                   <li><a target='_blank' href="https://github.com/santahiron6-cmyk" className={styles.iconStyle}><GithubIcon styles={{size:50}}/></a></li>
                </ul>
            </div>
        </div>
        <div className={styles.copyrightBox}>
            <hr className={styles.separator}/>
            <p className={styles.copyright}>
             &copy; {new Date().getFullYear()} {logo.sirname} {logo.firstname}
            </p>
        </div>
        </footer>
        
    )
}
export default Footer;