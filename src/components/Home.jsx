import styled from 'styled-components'

import React, { Suspense, lazy } from 'react'

const Section = lazy(() => import('./Section'))

const Home = () => {
  return (
    <Content>
      <Suspense>
      <Section
          title='Modelo 3'
          description='Pedír Online la entrega Sin Contacto'
          backgroundImg='../../public/images/model-3.jpg'
          leftButton='Pedido Personalizado'
          rightButton='Inventario Existente'
        />
        <Section
          title='Modelo Y'
          description='Pedír Online la entrega Sin Contacto'
          backgroundImg='../../public/images/model-y.jpg'
          leftButton='Pedido Personalizado'
          rightButton='Inventario Existente'
        />
        <Section
          title='Modelo S'
          description='Pedír Online la entrega Sin Contacto'
          backgroundImg='../../public/images/model-s.jpg'
          leftButton='Pedido Personalizado'
          rightButton='Inventario Existente'
        />
        <Section
          title='Modelo X'
          description='Pedír Online la entrega Sin Contacto'
          backgroundImg='../../public/images/model-x.jpg'
          leftButton='Pedido Personalizado'
          rightButton='Inventario Existente'
        />
        <Section 
          title='Paneles Solares'
          description='Los Paneles Solares Más Económicos De América'
          backgroundImg='../../public/images/solar-panel.jpg'
          leftButton='Ordenar Ahora'
          rightButton='Más Información'
        />
        <Section 
          title='Techo Solar'
          description='Produzca Energía Limpia Desde Su Techo'
          backgroundImg='../../public/images/solar-roof.jpg'
          leftButton='Ordenar Ahora'
          rightButton='Más Información'
        />
        <Section 
          title='Accesorios'
          backgroundImg='../../public/images/accessories.jpg'
          leftButton='Comprar ahora'
        />
      </Suspense>
    </Content>
  )
}
export default Home

const Content = styled.div `
  width: 100%;
`