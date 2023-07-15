/* eslint-disable no-unused-vars */
import { ReactNode, createContext, useState } from 'react'
import { Coffee } from '../assets/coffees/coffees'

interface CartContextProviderProps {
  children: ReactNode
}

export type PaymentMethod = 'credit' | 'debit' | 'money' | undefined

interface Address {
  cep: string
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  uf: string
}

interface CartContextType {
  cart: Coffee[]
  address: Address
  paymentMethod: PaymentMethod
  addItemToCart: (coffee: Coffee, quantity: number) => void
  clearCart: () => void
  removeCoffeeUnit: (coffee: Coffee) => void
  removeCoffee: (coffee: Coffee) => void
  saveAddressStatus: (address: Address) => void
  savePaymentMethod: (paymentMethod: PaymentMethod) => void
}

const initialAddressState: Address = {
  bairro: '',
  cep: '',
  cidade: '',
  complemento: '',
  numero: '',
  rua: '',
  uf: '',
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Coffee[]>([])
  const [address, setAddress] = useState<Address>(initialAddressState)
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(undefined)

  function addItemToCart(coffee: Coffee, quantity: number) {
    const coffeAlreadyInCart = cart.find((item) => item.id === coffee.id)

    if (coffeAlreadyInCart) {
      setCart((state) =>
        state.map((item) => {
          if (item.id === coffee.id) {
            return {
              ...item,
              quantity: item.quantity + quantity,
            }
          } else {
            return item
          }
        }),
      )
    } else {
      setCart((state) => [...state, { ...coffee, quantity }])
    }

    console.log(cart)
  }

  function removeCoffeeUnit(coffee: Coffee) {
    if (coffee.quantity > 1) {
      setCart((state) =>
        state.map((item) => {
          if (item.id === coffee.id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            }
          } else {
            return item
          }
        }),
      )
    }
  }

  function removeCoffee(coffee: Coffee) {
    const newQuantity = cart.map((item) => {
      if (item.id === coffee.id) {
        return {
          ...item,
          quantity: 0,
        }
      } else {
        return item
      }
    })

    setCart(
      newQuantity.filter((item) => {
        return item.quantity > 0
      }),
    )
  }

  function saveAddressStatus(address: Address) {
    setAddress({
      bairro: address.bairro,
      cep: address.cep,
      cidade: address.cidade,
      complemento: address.complemento,
      numero: address.numero,
      rua: address.rua,
      uf: address.uf,
    })
  }

  function savePaymentMethod(paymentMethod: PaymentMethod) {
    setPaymentMethod(paymentMethod)
  }

  function clearCart() {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        address,
        paymentMethod,
        addItemToCart,
        clearCart,
        removeCoffeeUnit,
        removeCoffee,
        saveAddressStatus,
        savePaymentMethod,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
