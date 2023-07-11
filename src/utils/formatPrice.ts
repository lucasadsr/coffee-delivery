export function formatPrice(price: number) {
  const real = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  })

  const formatedPrice = real.format(price)

  return formatedPrice
}
