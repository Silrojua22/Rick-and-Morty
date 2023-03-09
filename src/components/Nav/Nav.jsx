import React from "react";
import SearchBar from "../SearchBar";
import styles from '../Nav/Nav.module.css'

export default function Nav (props) {
  return (
    <div>
      <SearchBar 
      onSearch={props.onSearch} 
      />
    </div>
  )
}

