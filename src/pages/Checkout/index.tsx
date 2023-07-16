/* eslint-disable no-unused-vars */
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
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { useNavigate } from 'react-router-dom'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
  undefined = 'undefined',
}

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().length(8, 'Informe o CEP (Apenas números)'),
  rua: zod.string().min(1, 'Informe a rua'),
  numero: zod.number({ invalid_type_error: 'Informe um número válido' }),
  complemento: zod.string().optional(),
  bairro: zod.string().min(1, 'Informe o bairro'),
  cidade: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().length(2, 'Informe a UF'),
})

type newOrderData = zod.infer<typeof newOrderFormValidationSchema>

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function Checkout() {
  const { cart, saveAddressStatus, savePaymentMethod, clearCart } =
    useContext(CartContext)

  const { register, handleSubmit, formState } = useForm<newOrderData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })

  const { errors } = formState as ErrorsType

  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethods>(PaymentMethods.undefined)

  function togglePaymentMethod(type: PaymentMethods) {
    setSelectedPaymentMethod(type)
  }

  const errorsArray = Object.values(errors)

  if (selectedPaymentMethod === PaymentMethods.undefined) {
    errorsArray.push({ message: 'Informe um método de pagamento' })
  }

  if (cart.length === 0) {
    errorsArray.push({
      message: 'Seu carrinho está vazio. Adicione pelo menos um item',
    })
  }

  const navigate = useNavigate()

  function handleNewOrder(data: newOrderData) {
    if (selectedPaymentMethod !== PaymentMethods.undefined && cart.length > 0) {
      saveAddressStatus(data)
      savePaymentMethod(selectedPaymentMethod)
      clearCart()
      navigate('/success')
      console.log(data, { payment: selectedPaymentMethod })
    }
  }

  const totalItemsValue = cart.reduce((accumulator, currentItem) => {
    const itemValue = currentItem.price * currentItem.quantity
    return accumulator + itemValue
  }, 0)

  return (
    <CheckoutSection>
      <form onSubmit={handleSubmit(handleNewOrder)}>
        <PurchaseInfoContainer>
          <h3>Complete seu pedido</h3>
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
            <Title>
              <CurrencyDollar size={22} />
              Pagamento
            </Title>
            <Subtitle className="subtitle">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </Subtitle>
            <ButtonsList>
              <ButtonContainer
                type="button"
                selected={selectedPaymentMethod === PaymentMethods.credit}
                onClick={() => togglePaymentMethod(PaymentMethods.credit)}
              >
                <CreditCard size={16} />
                <p>Cartão de crédito</p>
              </ButtonContainer>
              <ButtonContainer
                type="button"
                selected={selectedPaymentMethod === PaymentMethods.debit}
                onClick={() => togglePaymentMethod(PaymentMethods.debit)}
              >
                <Bank size={16} />
                <p>cartão de débito</p>
              </ButtonContainer>
              <ButtonContainer
                type="button"
                selected={selectedPaymentMethod === PaymentMethods.money}
                onClick={() => togglePaymentMethod(PaymentMethods.money)}
              >
                <Money size={16} />
                <p>dinheiro</p>
              </ButtonContainer>
            </ButtonsList>
          </div>
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
              <span>
                {errorsArray.length > 0 ? errorsArray[0].message : ''}
              </span>
            </Summary>
          </OrderResumeContainer>
        </SelectedCoffees>
      </form>
    </CheckoutSection>
  )
}
