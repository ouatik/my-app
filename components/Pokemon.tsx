import { useState } from 'react';

export function Pokemon() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const photos = [
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/26.png ',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png ',

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
