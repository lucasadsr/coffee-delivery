import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Coffee } from '../../../../assets/coffees/coffees'
import { CoffeeCardContainer } from './styles'
import { formatPrice } from '../../../../utils/formatPrice'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { CoffeeQuantityContainer } from '../../../../components/CoffeeQuantity/styles'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  const { addItemToCart } = useContext(CartContext)

  function handleAddToCart() {
    addItemToCart(coffee, quantity)
  }

  function increaseQuantity() {
    setQuantity((state) => state + 1)
  }

  function decreaseQuantity() {
    if (quantity > 0) {
      setQuantity((state) => state - 1)
    }
  }

  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt={coffee.name} />
      <div className="tags">
        {coffee.tags.map((tag) => (
          <p key={tag} className="tag">
            {tag}
          </p>
        ))}
      </div>
      <p className="coffeeName">{coffee.name}</p>
      <p className="coffeeDescription">{coffee.description}</p>
      <div className="buy">
        <p>
          R$ <span className="price">{formatPrice(coffee.price)}</span>
        </p>
        <CoffeeQuantityContainer>
          <button>
            <Minus onClick={decreaseQuantity} />
          </button>
          <span>{quantity}</span>
          <button>
            <Plus onClick={increaseQuantity} />
          </button>
        </CoffeeQuantityContainer>
        <button className="cart" onClick={handleAddToCart}>
          <ShoppingCart weight="fill" size={22} />
        </button>
      </div>
    </CoffeeCardContainer>
  )
}
