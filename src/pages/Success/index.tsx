import { Clock, MapPin, Timer } from 'phosphor-react'
import {
  Subtitle,
  SuccessContainer,
  Title,
  InfoContainer,
  DeliveryInfosContainer,
} from './styles'
import deliveryGuy from '../../assets/delivery-guy.png'
import { useContext } from 'react'
import { CartContext, PaymentMethod } from '../../contexts/CartContext'

export function Success() {
  const { address, paymentMethod } = useContext(CartContext)

  function processPaymentMethod(paymentMethod: PaymentMethod) {
    if (paymentMethod === 'credit') {
      return 'Cartão de Crédito'
    } else if (paymentMethod === 'debit') {
      return 'Cartão de Débito'
    } else {
      return 'Dinheiro'
    }
  }

  return (
    <SuccessContainer>
      <div>
        <Title>Uhu! Pedido confirmado</Title>
        <Subtitle>
          Agora é só aguardar que logo o café chegará até você
        </Subtitle>

        <DeliveryInfosContainer>
          <InfoContainer color="#8047F8">
            <i>
              <MapPin size={16} weight="fill" />
            </i>
            <div>
              <p>
                Entrega em{' '}
                <strong>
                  Rua {address.rua}, {address.numero}
                </strong>
              </p>
              <p>
                {address.bairro} - {address.cidade}, {address.uf}
              </p>
            </div>
          </InfoContainer>
          <InfoContainer color="#DBAC2C">
            <i>
              <Timer size={16} weight="fill" />
            </i>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </InfoContainer>
          <InfoContainer color="#C47F17">
            <i>
              <Clock size={16} weight="fill" />
            </i>
            <div>
              <p>Pagamento na entrega</p>
              <strong>{processPaymentMethod(paymentMethod)}</strong>
            </div>
          </InfoContainer>
        </DeliveryInfosContainer>
      </div>
      <img src={deliveryGuy} alt="" />
    </SuccessContainer>
  )
}
