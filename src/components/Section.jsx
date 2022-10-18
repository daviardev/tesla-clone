import styled from 'styled-components'

const Section = ({ title, description, backgroundImg, leftButton, rightButton }) => {
  return (
    <Wrap bgImage={ backgroundImg }>
      <ItemText>
        <h1>{ title }</h1>
        <Paragraph>{ description }</Paragraph>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{ leftButton }</LeftButton>
          { rightButton && <RightButton>{ rightButton }</RightButton> }
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
  background-image: ${props => `url("../../public/images/${props.bgImage}")`};
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  background: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
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

const Paragraph = styled.p `
  font-family: 'GothamSSm-Light_Web';
`