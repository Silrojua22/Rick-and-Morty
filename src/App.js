import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav/Nav'
import React,{useState, useEffect} from 'react'

function App () {

  useEffect(() => {
    document.title = "Rick and Mory";
  
  }, []);

  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

  const onClose = (id) => {
    setCharacters(characters.filter((characters) => characters.id !== id));
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav
        onSearch={onSearch}
      />
       <br></br>
       <div>
         <Cards
           characters={characters}
           onClose={onClose}
         />
       </div>
       
     </div>
   )
 }

export default App
