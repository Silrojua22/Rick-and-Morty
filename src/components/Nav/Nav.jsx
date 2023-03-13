import React from "react";
import SearchBar from "../SearchBar";
import styles from '../Nav/Nav.module.css'
import { NavLink } from "react-router-dom";

export default function Nav (props) {
  return (
    <div className={styles.container}>

      <NavLink to="/" className={({isActive}) => isActive ? styles.active : null}>Home</NavLink>
      <NavLink to="/abaut" className={({isActive}) => isActive ? styles.active : null}>Abaut</NavLink>

      <SearchBar 
      onSearch={(characterID) => props.onSearch(characterID)} 
      />
    </div>
  )
}

