
//Componente TablaEquipos que devuelve la tabla completa de cada liga previamente seleccionada
function TablaEquipos({standings}){
    return(
    <div className="tabla-equipos-container">
      <table>
          <thead>
            <tr>
              <th>Posicion</th>
              <th>Club</th>
              <th>PJ</th>
              <th>PG</th>
              <th>PE</th>
              <th>PP</th>
              <th>GF</th>
              <th>GC</th>
              <th>DG</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
          {
          standings.map((equipo) => {
          return(
            <tr key={equipo.team_key}>
              <td>{equipo.standing_place}</td>
              <td>{equipo.standing_team}</td>
              <td>{equipo.standing_P}</td>
              <td>{equipo.standing_W}</td>
              <td>{equipo.standing_D}</td>
              <td>{equipo.standing_L}</td>
              <td>{equipo.standing_F}</td>
              <td>{equipo.standing_A}</td>
              <td>{equipo.standing_GD}</td>
              <td>{equipo.standing_PTS}</td>
            </tr>
          )
        })
      }
        </tbody> 
      </table>
    </div>)
  }

export default TablaEquipos;