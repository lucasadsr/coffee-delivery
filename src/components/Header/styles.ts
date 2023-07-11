import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
    }
  }
`
