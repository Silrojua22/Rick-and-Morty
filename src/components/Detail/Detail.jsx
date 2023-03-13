import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

export default function Detail(props) {
    console.log(useParams())
     const {detailId} = useParams()
     const [character, setCharacter] = useState({})

     useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((res) => res.json())
        .then((data) => {
          data.name ? setCharacter(data) : window.alert("No hay personajes con ese ID") 

        })
        .catch((err) => {
            console.log(err);
            alert("Ups! Algo estuvo mal")
        })
        return setCharacter({})
     },[])
     return(
        <div>
            <h1></h1>


        </div>
    )
}