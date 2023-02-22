import React from "react";

export default function SearchBar(props) {

   const [character, setCharacter] = React.useState('')

   function actualizar(e){
      setCharacter(e.target.value)
   }

   return (
      <div style={{backgroundColor:"green", width:"200px"}}>
         <input type='search' onChange={actualizar} value={character} />
         <button onClick= {()=> props.onSearch(character)}>Agregar</button>
      </div>
   );
}
