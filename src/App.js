import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav/Nav'
import React,{useState} from 'react'
import Detail from './components/Detail/Detail'
import About from "./components/About/About"
import { Routes, Route } from 'react-router-dom'


function App () {

  const [characters, setCharacters] = useState([]);
  
  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // data --> {}
        (data.name ? characters.filter((char) => char.id === data.id).length === 0 : "") ? setCharacters([...characters, data]):
        alert("Personaje ya existe")
      })
      .catch((error) => console.log(error));
  };

  const onClose = (id) => {
    const filtered = characters.filter((char)=>char.id !== Number(id))
    setCharacters(filtered)
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav
        onSearch={onSearch}
      />
       <Routes>
        <Route path="/" element={<Cards characters={characters} onClose={onClose}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail characters={characters}/>} /> 
      </Routes>
         
       
       
     </div>
   )
 }

export default App
