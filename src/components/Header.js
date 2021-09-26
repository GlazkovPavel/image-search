import logo from "../image/header_black_theme.png"

function Header({isLoader}){
  return(
      <header className={`header ${isLoader && 'header__border'}`}>
        <img className="header__logo" src={logo} alt="Место" />
      </header>
  )
}

export default Header;