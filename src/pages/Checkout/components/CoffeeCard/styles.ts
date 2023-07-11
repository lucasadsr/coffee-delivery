import { styled } from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 4rem;
    height: 4rem;
  }

  .infos {
    display: flex;
    gap: 1.25rem;
  }

  .actions {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .price {
    font-weight: 700;
    color: ${(props) => props.theme.colors['gray-700']};
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors['gray-700']};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSize.roboto.xs};
  background-color: ${(props) => props.theme.colors['gray-400']};
  border-radius: 0.375rem;
  transition: background 100ms;

  svg {
    color: ${(props) => props.theme.colors['purple-500']};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors['gray-500']};
  }
`

export const BorderLine = styled.hr`
  color: ${(props) => props.theme.colors['gray-500']};
  opacity: 0.5;
  margin-block: 1.5rem;
`
