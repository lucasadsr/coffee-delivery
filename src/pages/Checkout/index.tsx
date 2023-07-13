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
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

const newOrderFormValidarionSchema = zod.object({
  cep: zod.string().length(8, 'Informe o CEP'),
  rua: zod.string().min(1, 'Informe a Rua'),
  numero: zod.number().min(1, 'Informe o número'),
  complemento: zod.string().optional(),
  bairro: zod.string().min(1, 'Informe o bairro'),
  cidade: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().length(2, 'Informe a UF'),
})

type newOrderData = zod.infer<typeof newOrderFormValidarionSchema>

export function Checkout() {
  const { register, handleSubmit } = useForm<newOrderData>({
    resolver: zodResolver(newOrderFormValidarionSchema),
  })

  function handleNewOrder(data: newOrderData) {
    console.log(data)
  }

  const { cart } = useContext(CartContext)

  const totalItemsValue = cart.reduce((accumulator, currentItem) => {
    const itemValue = currentItem.price * currentItem.quantity
    return accumulator + itemValue
  }, 0)

  return (
    <CheckoutSection>
      <PurchaseInfoContainer>
        <h3>Complete seu pedido</h3>
        <form onSubmit={handleSubmit(handleNewOrder)}>
          <div className="box">
            <Title>
              <MapPinLine size={22} />
              Endereço de Entrega
            </Title>
            <Subtitle className="subtitle">
              Informe o endereço onde deseja receber seu pedido
            </Subtitle>
            <InputsContainer>
              <InputContainer
                placeholder="CEP"
                width="12.5rem"
                required
                {...register('cep')}
              />
              <InputContainer
                placeholder="Rua"
                width="35rem"
                {...register('rua')}
              />
              <InputContainer
                placeholder="Número"
                width="12.5rem"
                {...register('numero', { valueAsNumber: true })}
              />
              <InputContainer
                placeholder="Complemento"
                width="21.75rem"
                {...register('complemento')}
              />
              <InputContainer
                placeholder="Bairro"
                width="12.5rem"
                {...register('bairro')}
              />
              <InputContainer
                placeholder="Cidade"
                width="17.25rem"
                {...register('cidade')}
              />
              <InputContainer
                placeholder="UF"
                width="3.75rem"
                {...register('uf')}
              />
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
              <ButtonContainer type="button" className="method">
                <CreditCard size={16} />
                <p>Cartão de crédito</p>
              </ButtonContainer>
              <ButtonContainer type="button" className="method">
                <Bank size={16} />
                <p>cartão de débito</p>
              </ButtonContainer>
              <ButtonContainer type="button" className="method">
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
          {cart.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
          <Summary>
            <p>
              Total dos itens <span>R$ {formatPrice(totalItemsValue)}</span>
            </p>
            <p>
              Entrega <span>R$ {formatPrice(3.9)}</span>
            </p>
            <p>
              Total <span>R$ {formatPrice(totalItemsValue + 3.9)}</span>
            </p>

            <button onClick={handleSubmit(handleNewOrder)}>
              Confirmar o pedido
            </button>
          </Summary>
        </OrderResumeContainer>
      </SelectedCoffees>
    </CheckoutSection>
  )
}
