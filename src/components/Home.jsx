import styled from 'styled-components'

import React, { Suspense, lazy } from 'react'

const Section = lazy(() => import('./Section'))

const Home = () => {
  return (
    <Content>
      <Suspense>
      <Section
          title='Modelo 3'
          description='Pedír online la entrega sin contacto'
          backgroundImg='../../public/images/model-3.jpg'
          leftButton='Pedido personalizado'
          rightButton='Inventario existente'
        />
        <Section
          title='Modelo Y'
          description='Pedír online la entrega sin contacto'
          backgroundImg='../../public/images/model-y.jpg'
          leftButton='Pedido personalizado'
          rightButton='Inventario existente'
        />
        <Section
          title='Modelo S'
          description='Pedír online la entrega sin contacto'
          backgroundImg='../../public/images/model-s.jpg'
          leftButton='Pedido personalizado'
          rightButton='Inventario existente'
        />
        <Section
          title='Modelo X'
          description='Pedír online la entrega sin contacto'
          backgroundImg='../../public/images/model-x.jpg'
          leftButton='Pedido personalizado'
          rightButton='Inventario existente'
        />
        <Section 
          title='Paneles solares'
          description='Los paneles solares más económicos de América'
          backgroundImg='../../public/images/solar-panel.jpg'
          leftButton='Ordenar ahora'
          rightButton='Más información'
        />
        <Section 
          title='Techo solar'
          description='Produzca energía limpia desde su techo'
          backgroundImg='../../public/images/solar-roof.jpg'
          leftButton='Ordenar ahora'
          rightButton='Más información'
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