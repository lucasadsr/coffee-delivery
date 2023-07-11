import { ShoppingCart } from 'phosphor-react'
import { Coffee } from '../../../../assets/coffees/coffees'
import { CoffeeCardContainer } from './styles'
import { CoffeeQuantity } from '../../../../components/CoffeeQuantity'
import { formatPrice } from '../../../../utils/formatPrice'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
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
        <CoffeeQuantity coffee={coffee} />
        <button className="cart">
          <ShoppingCart weight="fill" size={22} />
        </button>
      </div>
    </CoffeeCardContainer>
  )
}
