import { Trash } from 'phosphor-react'
import { Coffee } from '../../../../assets/coffees/coffees'
import { CoffeeQuantity } from '../../../../components/CoffeeQuantity'
import { BorderLine, CoffeeCardContainer, RemoveButton } from './styles'
import { formatPrice } from '../../../../utils/formatPrice'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <div>
      <CoffeeCardContainer>
        <div className="infos">
          <img src={coffee.image} />
          <div>
            <p>{coffee.name}</p>
            <div className="actions">
              <CoffeeQuantity coffee={coffee} />
              <RemoveButton>
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
