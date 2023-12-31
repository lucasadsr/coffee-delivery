import { css, styled } from 'styled-components'

interface InputContainerProps {
  width: string
}

interface ButtonContainerProps {
  selected: boolean
}

export const CheckoutSection = styled.section`
  h3 {
    margin-top: 2.5rem;
    margin-bottom: 0.94rem;
    color: ${(props) => props.theme.colors['gray-800']};
    font-family: ${(props) => props.theme.fontFamily.baloo};
    font-size: ${(props) => props.theme.fontSize.baloo.xs}rem;
    font-weight: 700;
  }

  form {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    .box {
      padding: 2.5rem;
      border-radius: 0.375rem;
      background: ${(props) => props.theme.colors['gray-200']};
      width: 40rem;
    }

    .payment {
      margin-top: 0.75rem;

      svg {
        color: ${(props) => props.theme.colors['purple-500']};
      }
    }

    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 1024px) {
    h3 {
      font-size: ${(props) => props.theme.fontSize.baloo.m}rem;
      margin-top: 2rem;
    }
    .box {
      max-width: 100%;
      padding: 1.5rem !important;
    }
  }
`

export const PurchaseInfoContainer = styled.div``

export const InputContainer = styled.input<InputContainerProps>`
  width: ${(props) => props.width};
  padding: 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid ${(props) => props.theme.colors['gray-400']};
  background: ${(props) => props.theme.colors['gray-300']};

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 0.75rem;

  font-size: ${(props) => props.theme.fontSize.roboto.s}rem;
  color: ${(props) => props.theme.colors['gray-700']};

  ::placeholder {
    color: ${(props) => props.theme.colors['gray-600']};
  }

  :focus {
    border: 1px solid ${(props) => props.theme.colors['yellow-900']};
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

export const Title = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors['gray-800']};

  svg {
    color: ${(props) => props.theme.colors['yellow-900']};
  }
`

export const Subtitle = styled.p`
  margin-left: 1.87rem;
  color: ${(props) => props.theme.colors['gray-700']};
  font-size: ${(props) => props.theme.fontSize.roboto.s}rem;
  margin-bottom: 2rem;
`

export const ButtonsList = styled.div`
  display: flex;
  gap: 0.75rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  padding: 0.9rem 0.7rem;
  align-items: center;
  gap: 0.6rem;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme.colors['gray-400']};
  width: 100%;

  font-size: ${(props) => props.theme.fontSize.roboto.button_m}rem;
  color: ${(props) => props.theme.colors['gray-700']};
  text-transform: uppercase;
  transition: background 100ms;

  &:hover {
    background-color: ${(props) => props.theme.colors['gray-500']};
  }

  ${(props) =>
    props.selected
      ? css`
          background-color: ${props.theme.colors['purple-100']};
          border: 1px solid ${props.theme.colors['purple-900']};
          box-shadow: none;
          outline: none;
        `
      : ''}
`

export const SelectedCoffees = styled.div`
  width: 28rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

export const OrderResumeContainer = styled.div`
  padding: 2.5rem;
  border-radius: 0.375rem 2.75rem;
  background-color: ${(props) => props.theme.colors['gray-200']};

  @media screen and (max-width: 1024px) {
    padding: 1.5rem;
  }
`

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  p {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme.colors['gray-700']};

    &:last-child {
      font-weight: 700;
      font-size: ${(props) => props.theme.fontSize.roboto.l}rem;
    }
  }

  button {
    text-transform: uppercase;
    padding: 0.75rem;
    width: 100%;
    height: 2.875rem;
    background-color: ${(props) => props.theme.colors['yellow-500']};
    border-radius: 0.375rem;

    color: white;
    font-weight: 700;
    font-size: ${(props) => props.theme.fontSize.roboto.button_g}rem;
    margin-top: 0.75rem;
    transition: background 100ms;

    &:hover {
      background-color: ${(props) => props.theme.colors['yellow-900']};
    }
  }
`
