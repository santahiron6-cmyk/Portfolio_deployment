import styles from'./HomePageMain.module.css'
import Presentation from '../HomePresentationBox/Presentation';

function PageMain(){
    const nomComplet="SANA tahirou"
    const monTitre="Telecom engineer"
    return(
        <main className={styles.Box}>
            <Presentation nomComplet={nomComplet} monTitre={monTitre} />
        </main>
    )
}
export default PageMain;