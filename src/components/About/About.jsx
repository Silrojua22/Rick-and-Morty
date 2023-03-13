import React from "react"
import styles from './About.module.css'

export default function About () {
    return (
     <div>
        <h1>Creador</h1>
        <p className={styles.about}>Silvio Rodrigo Juarez</p>
        <h1>A cerca de la Aplicacion</h1>
        <p className={styles.about}>Nuestra App ayuda a encontrar, mediante un ID, personajes de la reconocida serie Rick And Morty. Cada vez que agregamos el ID en nuestro boton onSearch, nos rennderiza una carta con la imagen de nuestro personaje seleccionado y sus caracteristicas. Mediante el boton close, podemos eliminar esta carta! </p>
     </div>
    )
}