import { Minus, Plus } from 'phosphor-react'
import { Coffee } from '../../assets/coffees/coffees'
import { CoffeeQuantityContainer } from './styles'

interface CoffeeQuantityProps {
  coffee: Coffee
}

export function CoffeeQuantity({ coffee }: CoffeeQuantityProps) {
  return (
    <CoffeeQuantityContainer>
      <button>
        <Minus />
      </button>
      <span>{coffee.quantity}</span>
      <button>
        <Plus />
      </button>
    </CoffeeQuantityContainer>
  )
}
