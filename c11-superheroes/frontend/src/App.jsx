import { useEffect, useState } from 'react'

import './App.css'

function SuperheroDetail(props)  {
  console.log ("props", props);
  const superhero = props.superhero;
  const color = props.color;
  return (
    <div>
      <h2>{superhero.name}</h2>
      <ul>
        <li>Power:{superhero.power}</li>
        <li>Home City: {superhero.homeCity}</li>
        <li>Alter Ego: {superhero.alterEgo}</li>
      </ul>
    </div>
  )
}
const superheroes = [
  
    {
    "name": "Flash",
    "power": "Speed",
    "homeCity": "Central City",
    "alterEgo": "Barry Allen",
    "color": "yellow"
    },
    
    {
      "name": "Spider-man",
      "power": "Web-slinging",
      "homeCity": "New York City",
      "alterEgo": "Peter Parker",
      "color": "blue"
    },
    
    {
      "name": "Superman",
      "power": "Super Strong",
      "homeCity": "Metropolis",
      "alterEgo": "Clark Kent",
      "color": "red"
    }

];
function App() {
  console.log(superheroes);
  const [superheroesList, setSuperheroeslist] = useState([]);

  useEffect(() => {
    console.log("calling useEffect function");
    setSuperheroeslist(superheroes);
  },[])

  console.log("superheroesList", superheroesList);
  return (
  <div>
    <h1>Superhero Registry</h1>
    {superheroesList != undefined ? superheroesList.map((superhero) => {
       return <SuperheroDetail superhero={superhero} />;
    } )
  ):(
    <p></p>
  )
  </div>
  );
}

export default App
