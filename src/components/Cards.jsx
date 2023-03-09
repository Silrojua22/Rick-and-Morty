import Card from './Card';



export default function Cards({characters}) {

   const handleDelete = (id) => {
      characters(characters.filter((character) => character.id !== id));
   };


   return (
   <div style={{display: 'flex', flexWrap: 'wrap', gap:'0px'}}>
      {
         characters.map((characters) => {
            return  <Card
            key= {characters.id}
            name = {characters.name}
            species = {characters.species}
            gender = {characters.gender}
            image = {characters.image}
            onClose = {() => handleDelete(characters.id)}
            />
            
         })
      }
   </div>);
}
