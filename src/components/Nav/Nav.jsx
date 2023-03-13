import React from "react";
import SearchBar from "../SearchBar";
import styles from '../Nav/Nav.module.css'
import { NavLink } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className={styles.container}>
      <div className={styles.navLinks}>
        <NavLink to="/" className={({isActive}) => isActive ? styles.active : null}>
          Home
        </NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? styles.active : null}>
          About
        </NavLink>
      </div>

      <div className={styles.searchBar}>
        <SearchBar onSearch={(characterID) => props.onSearch(characterID)} />
      </div>
    </div>
  );
}

