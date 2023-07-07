import { ShoppingCart, MapPin } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={logo} />
      </NavLink>

      <div className="buttons">
        <button className="location">
          <MapPin size={22} weight="fill" className="pin" />
          <p>Porto Alegre, RS</p>
        </button>
        <button className="cart">
          <ShoppingCart size={22} weight="fill" />
        </button>
      </div>
    </HeaderContainer>
  )
}
