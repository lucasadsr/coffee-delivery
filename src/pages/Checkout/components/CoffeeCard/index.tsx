import { Minus, Plus, Trash } from 'phosphor-react'
import { Coffee } from '../../../../assets/coffees/coffees'
import { BorderLine, CoffeeCardContainer, RemoveButton } from './styles'
import { formatPrice } from '../../../../utils/formatPrice'
import { CoffeeQuantityContainer } from '../../../../components/CoffeeQuantity/styles'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addItemToCart, removeCoffeeUnit, removeCoffee } =
    useContext(CartContext)

  function handleAddToCart() {
    addItemToCart(coffee, 1)
  }

  function handleRemoveCoffeeUnit() {
    removeCoffeeUnit(coffee)
  }

  function handleRemoveCoffee() {
    removeCoffee(coffee)
  }

  return (
    <div>
      <CoffeeCardContainer>
        <div className="infos">
          <img src={coffee.image} />
          <div>
            <p>{coffee.name}</p>
            <div className="actions">
              <CoffeeQuantityContainer>
                <button>
                  <Minus onClick={handleRemoveCoffeeUnit} />
                </button>
                <span>{coffee.quantity}</span>
                <button>
                  <Plus onClick={handleAddToCart} />
                </button>
              </CoffeeQuantityContainer>
              <RemoveButton onClick={handleRemoveCoffee}>
                <Trash size={16} />
                <p>Remover</p>
              </RemoveButton>
            </div>
          </div>
        </div>
        <p className="price">R$ {formatPrice(coffee.price)}</p>
      </CoffeeCardContainer>
      <BorderLine />
    </div>
  )
}
