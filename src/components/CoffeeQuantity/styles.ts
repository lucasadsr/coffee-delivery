import { styled } from 'styled-components'

export const CoffeeQuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 4.5rem;
  padding: 0.5rem;
  border-radius: 0.375rem;
  background: ${(props) => props.theme.colors['gray-400']};

  svg {
    color: ${(props) => props.theme.colors['purple-500']};

    &:hover {
      color: ${(props) => props.theme.colors['purple-900']};
    }
  }

  button {
    display: flex;
    align-items: center;
  }
`
