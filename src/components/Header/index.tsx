import { ShoppingCart, MapPin } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cart, address } = useContext(CartContext)

  return (
    <HeaderContainer>
      <NavLink to={'/'} className="logo">
        <img src={logo} />
      </NavLink>

      <div className="buttons">
        <button className="location">
          <MapPin size={22} weight="fill" className="pin" />
          <p>
            {address.cidade}, {address.uf}
          </p>
        </button>
        <NavLink to={'/checkout'}>
          <button className="cart">
            <ShoppingCart size={22} weight="fill" />
            {cart.length > 0 ? <span>{cart.length}</span> : ''}
          </button>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
