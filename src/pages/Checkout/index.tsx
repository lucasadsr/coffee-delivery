import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  ButtonContainer,
  ButtonsList,
  CheckoutSection,
  InputContainer,
  InputsContainer,
  OrderResumeContainer,
  PurchaseInfoContainer,
  SelectedCoffees,
  Subtitle,
  Summary,
  Title,
} from './styles'
import { CoffeeCard } from './components/CoffeeCard'
import { formatPrice } from '../../utils/formatPrice'

export function Checkout() {
  return (
    <CheckoutSection>
      <PurchaseInfoContainer>
        <h3>Complete seu pedido</h3>
        <form>
          <div className="box">
            <Title>
              <MapPinLine size={22} />
              Endereço de Entrega
            </Title>
            <Subtitle className="subtitle">
              Informe o endereço onde deseja receber seu pedido
            </Subtitle>
            <InputsContainer>
              <InputContainer placeholder="CEP" width="12.5rem" />
              <InputContainer placeholder="Rua" width="35rem" />
              <InputContainer placeholder="Número" width="12.5rem" />
              <InputContainer placeholder="Complemento" width="21.75rem" />
              <InputContainer placeholder="Bairro" width="12.5rem" />
              <InputContainer placeholder="Cidade" width="17.25rem" />
              <InputContainer placeholder="UF" width="3.75rem" />
            </InputsContainer>
          </div>

          <div className="box payment">
            <Title className="title">
              <CurrencyDollar size={22} />
              Pagamento
            </Title>
            <Subtitle className="subtitle">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </Subtitle>
            <ButtonsList>
              <ButtonContainer className="method">
                <CreditCard size={16} />
                <p>Cartão de crédito</p>
              </ButtonContainer>
              <ButtonContainer className="method">
                <Bank size={16} />
                <p>cartão de débito</p>
              </ButtonContainer>
              <ButtonContainer className="method">
                <Money size={16} />
                <p>dinheiro</p>
              </ButtonContainer>
            </ButtonsList>
          </div>
        </form>
      </PurchaseInfoContainer>

      <SelectedCoffees>
        <h3>Cafés selecionados</h3>
        <OrderResumeContainer>
          <CoffeeCard
            coffee={{
              id: 7,
              name: 'Capuccino',
              description:
                'Bebida com canela feita de doses iguais de café, leite e espuma',
              price: 9.9,
              tags: ['tradicional', 'comLeite'],
              image: '/src/assets/coffees/images/capuccino.png',
              quantity: 1,
            }}
          />
          <CoffeeCard
            coffee={{
              id: 7,
              name: 'Capuccino',
              description:
                'Bebida com canela feita de doses iguais de café, leite e espuma',
              price: 9.9,
              tags: ['tradicional', 'comLeite'],
              image: '/src/assets/coffees/images/capuccino.png',
              quantity: 1,
            }}
          />
          <CoffeeCard
            coffee={{
              id: 7,
              name: 'Capuccino',
              description:
                'Bebida com canela feita de doses iguais de café, leite e espuma',
              price: 9.9,
              tags: ['tradicional', 'comLeite'],
              image: '/src/assets/coffees/images/capuccino.png',
              quantity: 1,
            }}
          />
          <Summary>
            <p>
              Total dos itens <span>R$ {formatPrice(18.9)}</span>
            </p>
            <p>
              Entrega <span>R$ {formatPrice(3.9)}</span>
            </p>
            <p>
              Total <span>R$ {formatPrice(21.9)}</span>
            </p>

            <button>Confirmar o pedido</button>
          </Summary>
        </OrderResumeContainer>
      </SelectedCoffees>
    </CheckoutSection>
  )
}
