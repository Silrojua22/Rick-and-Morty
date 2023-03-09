import styles from './Cards.module.css'

export default function Card({name, species,gender, image, onClose}) {
   return (
      <div className={styles.card}>
         <div className={styles.images}>
            <button onClick = {onClose} className={styles.button} >
                 Close
            </button>
            <img className={styles.image} src={image} alt="Not found" />  
            <h2 className={styles.name}>{name}</h2>
            <h2 className={styles.species}>{species}</h2>
            <h2 className={styles.gender}>{gender}</h2>
            
         </div>
      </div>
   );
}
