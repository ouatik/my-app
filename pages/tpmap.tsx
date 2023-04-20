export default function App() {
    const names = data.results;
    return (
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    );
  }