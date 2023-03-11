import React, { useState } from 'react';
import styles from './Cards.module.css'

export default function SearchBar(props) {
  const [character, setCharacter] = useState(""); // Agregamos un estado interno para el nombre del personaje

  const handleInputChange = (event) => {
    const {value} = event.target
    setCharacter(value)
 };


 return (
  <div>
     <input type='search' onChange={handleInputChange}/>
  <button  className={styles.buttonSearch} onClick={()=>props.onSearch(character)}>Agregar</button>
  </div>
);
}