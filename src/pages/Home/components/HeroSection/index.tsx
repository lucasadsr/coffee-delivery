import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/themes/default'
import { HeroContainer, Icon } from './styles'
import banner from '../../../../assets/banner.png'

export function HeroSection() {
  return (
    <HeroContainer>
      <div>
        <div className="titles">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <div className="topics">
          <div className="col-a">
            <div className="topic">
              <Icon $background={defaultTheme.colors['yellow-900']}>
                <ShoppingCart size={16} weight="fill" />
              </Icon>
              <p>Compra simples e segura</p>
            </div>
            <div className="topic">
              <Icon $background={defaultTheme.colors['yellow-500']}>
                <Timer size={16} weight="fill" />
              </Icon>
              <p>Entrega rápida e rastreada</p>
            </div>
          </div>

          <div className="col-b">
            <div className="topic">
              <Icon $background={defaultTheme.colors['gray-700']}>
                <Package size={16} weight="fill" />
              </Icon>
              <p>Embalagem mantém o café intacto</p>
            </div>

            <div className="topic">
              <Icon $background={defaultTheme.colors['purple-500']}>
                <Coffee size={16} weight="fill" />
              </Icon>
              <p>O café chega fresquinho até você</p>
            </div>
          </div>
        </div>
      </div>

      <img src={banner} />
    </HeroContainer>
  )
}
