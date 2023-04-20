import { useEffect, useState } from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Posiciones from "./components/Posiciones";
import EnVivo from "./components/EnVivo";

//https://allsportsapi.com/soccer-football-api-documentation


function App() {

  //Inicializacion de variables de estado
  const [live, setLive] = useState([]);
  const [standings, setStandings] = useState([]);
  const [liga, setLiga] = useState("152");


  //Consulta a la api por partidos en vivo
  const liveScore = async () => {
    const response = await fetch("https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=b06a24d4bb4554c827dcd4766c77fa98ad05c2fcb08a19917606bd9316f6b654");
    const data = await response.json();
    setLive(data.result);
  }

  //Renderizado de consulta a la api por partidos en vivo
  useEffect(() => {
    liveScore();
  }, []);


  //console.log(live);

  //Consulta a la api por determinada liga
  const showStandings = () => {
    fetch(`https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=${liga}&APIkey=b06a24d4bb4554c827dcd4766c77fa98ad05c2fcb08a19917606bd9316f6b654`)
    .then((response) => response.json())
    .then((data) => setStandings(data.result.total));
  }

  //Renderizado de consulta a la api por liga, consulta cada vez q la liga cambia
  useEffect(() => {
    showStandings();
  }, [liga]);

  //console.log(standings);


  return (
    <div className="main-container">

    <Navbar/>
     
    <Routes>
      <Route path='/' element={<EnVivo live={live}/>}/>
      <Route path='/posiciones' element={<Posiciones standings={standings} setLiga={setLiga}/>}/>
    </Routes>

    </div>
  )
}

export default App
