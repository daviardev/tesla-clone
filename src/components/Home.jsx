import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Content>
        <Section
          title='Modelo 3'
          backgroundImg='../../public/images/model-3.jpg'
        />
        <Section
          title='Modelo Y'
          backgroundImg='../../public/images/model-y.jpg'
        />
        <Section
          title='Modelo S'
          backgroundImg='../../public/images/model-s.jpg'
        />
        <Section
          title='Modelo X'
          backgroundImg='../../public/images/model-x.jpg'
        />
    </Content>
  )
}
export default Home

const Content = styled.div `
  width: 100%;
`