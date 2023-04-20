import { Pokemon } from '@/components/Pokemon';
import { useState, useEffect } from 'react';

type Pokemon = {
    name: string;
    url: string;
}

const getLastParam = (url: string) => {
    const resultat= url.split('/')
    console.log (resultat)
    return resultat
}
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

export default function Tp6() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(apiUrl);
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
      {/* Utilisation de la donnée reçue depuis l'API */}
      <ul>
        {data.results.map((pokemon: Pokemon) => {
          const lastParam = getLastParam(pokemon.url);
          return (
            <li key={pokemon.name}>
              <Pokemon idVariable={lastParam} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}