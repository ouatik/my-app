import { useState, useEffect } from 'react';

type Pokemon = {
    name: string;
    url: string
}

export default function Tp6() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  if (data === null ) {
    return <div>
        Loading ...
    </div>
  }
  return (
    <div>
        hello
      {/* Utilisation de la donnée reçue depuis l'API */}
            <ul>
            {data.results.map((pokemon: Pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}
