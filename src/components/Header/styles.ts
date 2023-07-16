import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0px;
  left: 0px;
  z-index: 5;
  background-color: ${(props) => props.theme.colors['gray-100']};
  width: 100%;

  padding-block: 2rem;

  .buttons {
    display: flex;
    gap: 0.75rem;

    button {
      display: flex;
      align-items: center;
      border: none;
      border-radius: 6px;

      height: 2.375rem;
      padding: 0.5rem;
    }

    .location {
      color: ${(props) => props.theme.colors['purple-900']};
      background: ${(props) => props.theme.colors['purple-100']};

      display: flex;
      gap: 0.25rem;

      svg {
        color: ${(props) => props.theme.colors['purple-500']};
      }

      p {
        font-family: ${(props) => props.theme.fontFamily.roboto};
        font-size: ${(props) => props.theme.fontSize.roboto.button_g}rem;
      }
    }

    .cart {
      color: ${(props) => props.theme.colors['yellow-900']};
      background: ${(props) => props.theme.colors['yellow-100']};
      position: relative;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -8px;
        right: -8px;
        text-decoration: none;
        font-size: ${(props) => props.theme.fontSize.roboto.xs}rem;
        color: white;
        font-weight: 700;
        background-color: ${(props) => props.theme.colors['yellow-900']};
        border-radius: 999px;
        width: 1.25rem;
        height: 1.25rem;
      }
    }
  }
`
