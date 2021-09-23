import logo from "../image/header_black_theme.png"

function Header(){
  return(
      <header className="header">
        <img className="header__logo" src={logo} alt="Место" />
      </header>
  )
}

export default Header;