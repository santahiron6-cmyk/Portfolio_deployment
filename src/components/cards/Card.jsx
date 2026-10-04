import styles from "./card.module.css"
import Card_Data from "./CardData"

 function Card(){
    const cardElmts=Card_Data.map((data)=>{
        return(
            <div key={data.id} className={styles.cardBox}>
                <img src={data.image} className={styles.cardImage} alt={data.description} />
                <div className={styles.card_textBox}>
                  <h2 className={styles.card_Description}>{data.description}</h2>
                  <p className={styles.card_text}>{data.text}</p>
                </div>
            </div>
        )})

    return(
        <div className={styles.cardsContainer}>
        {cardElmts}
        </div>
    )
}
export default Card;