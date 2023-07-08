import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Coffee } from '../../../../assets/coffees/coffees'
import { CoffeeCardContainer } from './styles'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const real = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  })

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
          R$ <span className="price">{real.format(coffee.price)}</span>
        </p>
        <div className="quantity">
          <button>
            <Minus />
          </button>
          <span>{coffee.quantity}</span>
          <button>
            <Plus />
          </button>
        </div>
        <button className="cart">
          <ShoppingCart weight="fill" size={22} />
        </button>
      </div>
    </CoffeeCardContainer>
  )
}
