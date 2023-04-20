import { useState } from 'react';

type PokemonProps = {idVariable:string}

export const Pokemon = ({idVariable}: PokemonProps) => { 
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const photos = [
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idVariable}.png`,
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${idVariable}.png`,

  ];
  

  function handleNextClick() {
    setCurrentPhoto(currentPhoto === photos.length - 1 ? 0 : currentPhoto + 1);
  }
  return (
    <div className='p-3 border border-2 rounded-md bg-gray-500 w-24'>
      <img src={photos[currentPhoto]} alt="Current photo" />
      <div> 
        <button onClick={handleNextClick}>click</button>
      </div>
    </div>
  );
  
}
