import { styled } from 'styled-components'

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
  margin-top: 3.37rem;
`

export const CoffeesContainer = styled.section`
  margin-bottom: 9.81rem;

  h2 {
    font-family: ${(props) => props.theme.fontFamily.baloo};
    font-size: ${(props) => props.theme.fontSize.baloo.l}rem;
  }
`
