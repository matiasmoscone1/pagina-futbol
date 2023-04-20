import TablaEquipos from "./TablaEquipos";

//Componente Posiciones, devuelve el listado de banderas y setea la liga de cada pais
function Posiciones({standings, setLiga}){
    return(
    <>
    <div className="posiciones-container">
      <ul className="paises-container">
        <li><button onClick={() => {setLiga("152")}} style={{backgroundImage:"url('https://apiv2.allsportsapi.com/logo/logo_country/44_england.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/></li>
        <li><button onClick={() => {setLiga("302")}} style={{backgroundImage:"url('https://apiv2.allsportsapi.com/logo/logo_country/6_spain.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/></li>
        <li><button onClick={() => {setLiga("175")}} style={{backgroundImage:"url('https://apiv2.allsportsapi.com/logo/logo_country/4_germany.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/></li>
        <li><button onClick={() => {setLiga("207")}} style={{backgroundImage:"url('https://apiv2.allsportsapi.com/logo/logo_country/5_italy.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/></li>
        <li><button onClick={() => {setLiga("168")}} style={{backgroundImage:"url('https://apiv2.allsportsapi.com/logo/logo_country/3_france.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/></li>
        <li><button onClick={() => {setLiga("266")}} style={{backgroundImage:"url('https://apiv2.allsportsapi.com/logo/logo_country/92_portugal.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/></li>
        <li><button onClick={() => {setLiga("44")}} style={{backgroundImage:"url('https://apiv2.allsportsapi.com/logo/logo_country/14_argentina.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/></li>
        <li><button onClick={() => {setLiga("99")}} style={{backgroundImage:"url('https://apiv2.allsportsapi.com/logo/logo_country/27_brazil.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/></li>
        <li><button onClick={() => {setLiga("332")}} style={{backgroundImage:"url('https://apiv2.allsportsapi.com/logo/logo_country/114_usa.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/></li>
        <li><button onClick={() => {setLiga("235")}} style={{backgroundImage:"url('https://apiv2.allsportsapi.com/logo/logo_country/78_mexico.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/></li>
      </ul>
    </div>
    <TablaEquipos standings={standings}/>
    </>
    ) 
  }

export default Posiciones;