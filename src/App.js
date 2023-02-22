import React from 'react'
import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'

const example = {
  name: 'Morty Smith',
  species: 'Human',
  gender: 'Male',
  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
};


function App () {
  
  const [characters, setCharacters] = React.useState([]);
  
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
            console.log(characters)
        } 
        else {
            window.alert('No hay personajes con ese ID');
        }
      });
  }


  return (
    <div className='App' style={{ padding: '25px' }}>

      <Nav onSearch={onSearch} />
      <Cards characters={characters} />

    </div>
  )
}

export default App
