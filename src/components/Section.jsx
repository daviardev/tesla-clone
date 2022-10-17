import styled from 'styled-components'

const Section = () => {
  return (
    <Wrap>
      <ItemText>
        <h1>Modelo 3</h1>
        <p>Pedír online la entrega sin contacto</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>Pedido personalizado</LeftButton>
          <RightButton>Inventario existente</RightButton>
        </ButtonGroup>
        <DownArrow src="../../public/down-arrow.svg" />
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('../../public/images/model-3.jpg');
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
`

const LeftButton = styled.div`
  background: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`

const RightButton = styled(LeftButton)`
  background: #fff;
  opacity: 0.65;
  color: #000;
`

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  overflow-x: hidden;
  animation: downAnim infinite 1.5s;
`

const Buttons = styled.div `

`