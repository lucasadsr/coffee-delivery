import { HeroSection } from './components/HeroSection'
import { Coffee, coffees } from '../../assets/coffees/coffees'
import { CoffeeCard } from './components/CoffeeCard'
import { CoffeeListContainer, CoffeesContainer } from './styles'

export function Home() {
  return (
    <>
      <HeroSection />
      <CoffeesContainer>
        <h2>Nossos cafés</h2>
        <CoffeeListContainer>
          {coffees.map((coffee: Coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />
          })}
        </CoffeeListContainer>
      </CoffeesContainer>
    </>
  )
}
