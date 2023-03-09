import React, { useState } from 'react';
import styles from './Cards.module.css'

export default function SearchBar({ onSearch }) {
  const [character, setCharacter] = useState(""); // Agregamos un estado interno para el nombre del personaje

  const handleInputChange = (event) => {
    setCharacter(event.target.value); // Actualizamos el estado cuando el usuario escribe en el input
  }

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Evitamos la recarga automática del formulario
    onSearch(character); // Pasamos el estado actualizado como parámetro a la función onSearch
  }
  

  return (
    <form className={styles['search-bar-container']} onSubmit={handleFormSubmit}>
      <input type='search' value={character} onChange={handleInputChange} /> {/* Usamos el valor del estado interno en el input */}
      <button type="submit" className={styles['search-bar-button']}>Agregar</button> {/* Agregamos el atributo type="submit" para que funcione el submit */}
    </form>
  );
}