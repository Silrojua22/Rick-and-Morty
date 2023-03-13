import styles from './Cards.module.css'
import { Link } from 'react-router-dom';

export default function Card({name, species,gender, image, onClose, id}) {
   
   return (
      <div className={styles.card}>
        <button onClick={onClose} className={styles.button}>
            Close
          </button>
          <Link to={`/detail/${id}`} className={styles['link-card']}>
            <div className={styles.images}>
              <img className={styles.image} src={image} alt="Not found" />  
              <h2 className={styles.name}>{name}</h2>
              <h2 className={styles.species}>{species}</h2>
              <h2 className={styles.gender}>{gender}</h2>
            </div>
          </Link>
          
        
      </div>
    );
  }

