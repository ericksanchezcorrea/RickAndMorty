import React, { useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'

function Detail() {
    
    const [character, setCharacter] = useState('')
    const params = useParams()

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${params.detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [params.detailId]);

    if(character.name) console.log(character.origin.name)

  return (
    <div>
        <h1>Detail</h1>
        <Link to="/home">Home</Link>

       {character.name && 
          <div>
            <h3>Nombre: {character.name}</h3>
            <h3>Status: {character.status}</h3>
            <h3>Especie: {character.specie}</h3>
            <h3>Género: {character.gender}</h3>
            <h3>Origen: {character.origin.name}</h3>
            <img src={character.image} alt={character.name} />
          </div>
       } 
    </div>
  )
}

export default Detail