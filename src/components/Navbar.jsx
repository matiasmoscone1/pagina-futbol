import {Link} from "react-router-dom";
//Componente Navbar
  function Navbar(){
    return(<div className="navbar-container">
      <Link className="link-navbar" to={'/'}><button>EN VIVO</button></Link>
      <Link className="link-navbar" to={'/posiciones'}><button>POSICIONES</button></Link>
    </div>)
  }


export default Navbar;