
import Logo from "./_logo"
import PerfilUsuario from "./_perfilUsuario"
import Buscador from "./_buscador"
import './Header.css'
const Header = () => {
  return (
    <div className="header">
    <section className="navegacion">
    <Logo></Logo>
    <PerfilUsuario usuario="Ross"></PerfilUsuario>
    </section>
    <Buscador></Buscador>
    </div>
  )
}

export default Header