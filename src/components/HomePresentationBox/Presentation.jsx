import style from './presentation.module.css'
import MyButton from '../ButtonFolder/MyButton';
import photo from '../../assets/acceuil_img.jpeg'
function Presentation(props){
    return(
        <div className={style.MainBox}>
            <div className={style.textBox}>
               <p className={style.greetings}>hello i am {props.nomComplet} </p>
               <p className={style.title}>{props.monTitre}</p>
                <div className={style.buttonBox}>
                  <MyButton text="about me" className="About"/>
                  <MyButton text="contact me" className="contact"/>

                </div>
            </div>
            <div className={style.ImgBox}>
                <a className={style.ImgLien} href={photo}>
                  <img className={style.presentImg} src={photo} alt="" />
                  <div className={style.ImgHover}><span style={{color:'rgb(186, 89, 10)'}}>view picture</span></div>
                </a>
            </div>
        </div>
       
    )
}
export default Presentation;