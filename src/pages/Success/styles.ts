import { styled } from 'styled-components'

interface InfoProps {
  color: '#8047F8' | '#DBAC2C' | '#C47F17'
}

export const SuccessContainer = styled.section`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: end;

  img {
    height: 18.31rem;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 2rem;
    flex-direction: column;
    gap: 3rem;

    img {
      height: 13.75rem;
    }
  }
`

export const Title = styled.h3`
  font-family: ${(props) => props.theme.fontFamily.baloo};
  font-size: ${(props) => props.theme.fontSize.baloo.l}rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors['yellow-900']};
`

export const Subtitle = styled.p`
  font-size: ${(props) => props.theme.fontSize.roboto.l}rem;
  color: ${(props) => props.theme.colors['gray-800']};
`

export const DeliveryInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 0.375rem 2.25rem;
  width: 32.875rem;
  border: 1px solid ${(props) => props.theme.colors['yellow-500']};
  margin-top: 2.5rem;

  @media screen and (max-width: 1024px) {
    padding: 1rem;
    width: 100%;
  }
`

export const InfoContainer = styled.div<InfoProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p,
  strong {
    color: ${(props) => props.theme.colors['gray-700']};
  }

  i {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.color};
    border-radius: 999px;
    padding: 0.5rem;
    height: fit-content;

    svg {
      color: white;
    }
  }
`
