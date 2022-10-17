import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Content>
        <Section />
        <Section />
        <Section />
    </Content>
  )
}
export default Home

const Content = styled.div `
  width: 100%;
`