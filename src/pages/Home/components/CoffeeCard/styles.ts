import { styled } from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  border-radius: 0.375rem 2.25rem;
  background: ${(props) => props.theme.colors['gray-200']};

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 1.25rem;

  img {
    position: relative;
    top: -1.25rem;
  }

  .tags {
    display: flex;
    gap: 0.25rem;
  }

  .tag {
    background: ${(props) => props.theme.colors['yellow-100']};
    border-radius: 6.25rem;
    color: ${(props) => props.theme.colors['yellow-900']};
    font-size: ${(props) => props.theme.fontSize.roboto.tag}rem;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  .coffeeName {
    font-family: ${(props) => props.theme.fontFamily.baloo};
    color: ${(props) => props.theme.colors['gray-800']};
    font-size: ${(props) => props.theme.fontSize.baloo.s}rem;
    font-weight: 700;
    margin: 1rem 0 0.5rem 0;
  }

  .coffeeDescription {
    text-align: center;
    color: ${(props) => props.theme.colors['gray-600']};
    font-size: ${(props) => props.theme.fontSize.roboto.s}rem;
    margin-bottom: 2.06rem;
  }

  button {
    display: flex;
    align-items: center;
  }

  .buy {
    display: flex;
    align-items: center;

    p {
      color: ${(props) => props.theme.colors['gray-700']};
      font-size: ${(props) => props.theme.fontSize.roboto.s}rem;
    }

    .price {
      font-family: ${(props) => props.theme.fontFamily.baloo};
      font-weight: 700;
      font-size: ${(props) => props.theme.fontSize.baloo.m}rem;
      margin-right: 1.44rem;
    }

    .quantity {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 4.5rem;
      padding: 0.5rem;
      border-radius: 0.375rem;
      background: ${(props) => props.theme.colors['gray-400']};
      margin-right: 0.5rem;
    }

    svg {
      color: ${(props) => props.theme.colors['purple-500']};
    }

    .cart {
      padding: 0.5rem;
      background: ${(props) => props.theme.colors['purple-900']};
      border-radius: 0.375rem;
    }

    .cart svg {
      color: white;
    }
  }
`
