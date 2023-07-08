import { styled } from 'styled-components'

interface IconProps {
  $background: string
}

export const Icon = styled.span<IconProps>`
  background: ${(props) => props.$background};
  padding: 0.5rem;
  border-radius: 1000px;
  height: 2rem;

  svg {
    color: white;
  }
`

export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
  min-height: 34rem;
  padding: 4rem 0;

  h1 {
    color: ${(props) => props.theme.colors['gray-900']};

    font-family: ${(props) => props.theme.fontFamily.baloo};
    font-size: ${(props) => props.theme.fontSize.baloo.xl}rem;
    font-weight: 800;
  }

  .titles {
    p {
      color: ${(props) => props.theme.colors['gray-800']};
      font-size: ${(props) => props.theme.fontSize.roboto.l}rem;
      width: 36.75rem;

      margin-top: 1rem;
      margin-bottom: 4.125rem;
    }
  }

  .topics {
    display: flex;
    justify-content: space-between;
  }

  .col-a,
  .col-b {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .col-a {
    p {
      width: 14.375rem;
    }
  }

  .col-b {
    p {
      width: 18.375rem;
    }
  }

  .topic {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    p {
      color: ${(props) => props.theme.colors['gray-700']};
    }
  }

  img {
    height: 22.5rem;
  }
`
