import { ReactNode, createContext, useState } from 'react'
import { Coffee } from '../assets/coffees/coffees'

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextType {
  cart: Coffee[]
  addItemToCart: (coffee: Coffee, quantity: number) => void
  removeCoffeeUnit: (coffee: Coffee) => void
  removeCoffee: (coffee: Coffee) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Coffee[]>([])

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

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeCoffeeUnit,
        removeCoffee,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
