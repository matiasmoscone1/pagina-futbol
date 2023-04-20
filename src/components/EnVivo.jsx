
  //Componente EnVivo que devuelve un mapeo de todos los partidos que hay en vivo
  function EnVivo({live}){
    return(<div>
      {live.map((partido) => {
      return(
      <div key={partido.event_key} className="live-container">            
          <div className="live-partido">
          <span>{partido.league_name} - {partido.country_name}</span>
          </div>
          <span className="live-partido-tiempo">{`${partido.event_status}'`}</span>
          <div className="live-partido">
          <img src={partido.away_team_logo}/>
          <span>{partido.event_away_team}</span>
          <span>vs</span> 
          <span>{partido.event_home_team}</span>
          <img src={partido.home_team_logo}/>
          </div>
      </div>)
    })}
    </div>)
  }

export default EnVivo;