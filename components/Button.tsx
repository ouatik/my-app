import { useState } from 'react';

export function PhotoDisplay() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const photos = [
    'pikaface.png',
    'pikados.png',
  ];

  function handleNextClick() {
    setCurrentPhoto(currentPhoto === photos.length - 1 ? 0 : currentPhoto + 1);
  }
  return (
    <div>
      <img src={photos[currentPhoto]} alt="Current photo" />
      <div> 
        <button onClick={handleNextClick}>click</button>
      </div>
    </div>
  );
  
}
