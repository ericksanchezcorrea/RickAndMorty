import React from "react";

export default function SearchBar({onSearch}) {

   const [character, setCharacter] = React.useState('')

   function  handleInputChange(e){
      setCharacter(e.target.value)
   }

   return (
      <div className="searchbar_wrapper">
         <input type='search' onChange={ handleInputChange} value={character} />
         <button onClick= {()=> onSearch(character)}>Agregar</button>
      </div>
   );
}
