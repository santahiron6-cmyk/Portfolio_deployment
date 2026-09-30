import styles from'./MyButton.module.css'


function MyButton({text,className}){
    return(
        <>
          <button className={`${styles.buttonStyle} ${styles[className]}`}>{text}</button>
         </>
    )
}
export default MyButton;