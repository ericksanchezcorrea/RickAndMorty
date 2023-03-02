import Card from './Card';

export default function Cards({characters, onClose}) {
   
   return (

      <div className='cards_wrapper'>
         
         <h1>Personajes</h1>
         <div className='cards_container'>

            {  characters &&
               characters.map((character)=>(
               
               <Card
                  key={character.id} 
                  id={character.id}
                  onClose={() => onClose(character.id)} 
                  name={character.name} 
                  species={character.species} 
                  gender={character.gender} 
                  image={character.image}   
               />
            ))}

         </div>

      </div>
   );
}