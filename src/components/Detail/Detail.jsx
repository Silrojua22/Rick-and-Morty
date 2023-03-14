import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import styles from "../Detail/Detail.module.css"

export default function Detail(props) {
    console.log(useParams())
     const {id} = useParams()
     const [character, setCharacter] = useState({})

     useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => res.json())
        .then((data) => {
          data.name ? setCharacter(data) : window.alert("No hay personajes con ese ID") 

        })
        .catch((err) => {
            console.log(err);
            alert("Ups! Algo estuvo mal")
        })
        return setCharacter({})
     },[id])
     return(
        <div className={styles.detail}>
         <div>
            <h1>Name: {character.name}</h1>
            <h1>Specie: {character.species}</h1>
            <h1>Gender: {character.gender}</h1>
            <h1>Status: {character.status}</h1>
            <h1>Origin: {character.origin?.name}</h1>   
         </div>
            <img className={styles.image} src={character.image} alt="Not found" />
        </div>
    )
}